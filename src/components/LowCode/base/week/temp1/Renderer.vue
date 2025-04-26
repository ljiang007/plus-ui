<template>
  <div :style="{ ...compProps.style, borderRadius: addPxIfNeeded(compProps.style.borderRadius) }">
    <div class="notice">
      <div class="notice-head">
        <div class="head-left">
          <div class="title-info">
            {{ compProps.attr.title }}
          </div>
          <div class="title-line"></div>
        </div>
      </div>
    </div>
    <div
      class="notice-content"
      :style="{
        padding: addPxIfNeeded(compProps.style.padding),
        margin: addPxIfNeeded(compProps.style.margin)
      }"
    >
      <div class="cale-left">
        <div class="cale-name">
          <el-icon @click="frontMonth"><ArrowLeftBold /></el-icon>
          <span style="font-weight: bold">{{ proxy.parseTime(compProps.attr.time, '{y}年{m}月') }}</span>
          <el-icon @click="nextMonth"><ArrowRightBold /></el-icon>
        </div>
        <div style="display: flex">
          <div class="cale-week">
            <template v-for="i in 5">
              <div v-if="startWeek">
                <span v-if="startWeek + i - 1 > 0 && startWeek + i - 1 <= maxWeek">第{{ startWeek + i - 1 }}周</span>
              </div>
            </template>
          </div>
          <el-calendar v-model="compProps.attr.time">
            <template slot="dateCell" #date-cell="{ data }">
              <span> {{ data.day.split('-').slice(2).join() }}</span>
              {{ calendarDateCount[data.day] }}
              <div
                v-if="calendarDateCount[data.day]"
                class="calendar-point"
                :class="{
                  finished: calendarDateCount[data.day].otherUnFinishCount + calendarDateCount[data.day].personUnFinishCount == 0,
                  others: calendarDateCount[data.day].haveOther
                }"
              ></div>
            </template>
          </el-calendar>
        </div>
      </div>
      <div class="cale-right">
        <div class="cale-message">
          <div style="font-weight: bold">纪要</div>
          <div class="cale-message-add" @click="addMessage">
            <el-icon><Plus /></el-icon>添加纪要
          </div>
        </div>
        <div class="cale-message-list">
          <div class="cale-message-item">
            <div class="items">
              <div class="i-left">
                <div class="radius"></div>
                <div>个人安排：12</div>
              </div>
              <div class="i-right">
                <div><el-tag size="mini">待完成</el-tag></div>
                <div><el-checkbox v-model="checked"></el-checkbox></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { addPxIfNeeded } from '@/components/LowCode/utils/styleUtils';
const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean;
}>();

const checked = ref(false);

//先写假数据
const startWeek = computed(() => {
  return 7;
});

const maxWeek = computed(() => {
  return 22;
});

const time = proxy.parseTime(new Date(), '{y}-{m}-{d}');
const calendarDateCount = ref({
  time: {
    count: 2,
    havePersonal: true,
    haveOther: false,
    personUnFinishCount: 2,
    otherUnFinishCount: 0
  }
});
//前一个月
const frontMonth = () => {
  ElMessage({
    message: `点击了上一个月`,
    type: 'success'
  });
  //   dateSel.value = new Date(dateSel.value.getFullYear(), dateSel.value.getMonth() - 1, 1);
};

//后一个月
const nextMonth = () => {
  ElMessage({
    message: `点击了下一个月`,
    type: 'success'
  });
  //   dateSel.value = new Date(dateSel.value.getFullYear(), dateSel.value.getMonth() + 1, 1);
};

const addMessage = () => {
  ElMessage({
    message: `点击了添加纪要`,
    type: 'success'
  });
};
</script>

<style scoped>
.notice {
  padding: 0 20px;
  border-bottom: 1px solid #d8d8d8;
}
.notice-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.head-left {
  font-size: 16px;
  font-weight: bold;
  color: rgba(16, 16, 16, 1);
  position: relative;
}
.title-info {
  z-index: 4;
  position: relative;
}

.title-line {
  position: absolute;
  width: 100%;
  height: 4px;
  background: linear-gradient(270deg, #98c9ff 0%, #ffffff 100%);
  z-index: 3;
  bottom: 0;
}
.notice-content {
  display: flex;
}
.cale-left {
  width: 30%;
}
.cale-right {
  width: calc(100% - 30%);
}

.cale-name {
  height: 40px;
  background: #edecec;
  font-size: 16px;
  color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.cale-message {
  height: 40px;
  background: #eff3ff;
  font-size: 16px;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  position: relative;
}

.cale-message-add {
  cursor: pointer;
  position: absolute;
  right: 16px;
  width: 88px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid #366cff;
  font-size: 12px;
  color: #366cff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cale-week {
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  min-width: 45px;
}
/* 日历组件样式 s */
::v-deep .el-calendar__header {
  display: none;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  border-bottom: 0.0625rem solid #dfe6ec;
}

::v-deep .el-calendar-table .el-calendar-day {
  box-sizing: border-box;
  padding: 0;
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
}

::v-deep .el-calendar-table tr td:first-child {
  border-left: 0;
}

::v-deep .el-calendar-table td {
  border-bottom: 0 solid #dfe6ec;
  border-right: 0 solid #dfe6ec;
  vertical-align: top;
  padding: 0 8px;
  transition: background-color 0.2s ease;
}

::v-deep .el-calendar-table thead th {
  padding: 8px 0;
  color: #999999;
}

::v-deep .el-calendar-table .el-calendar-day:hover {
  background-color: #2d80ff50;
  border-radius: 50%;
}

::v-deep .el-calendar-table td.is-today .el-calendar-day {
  background-color: #2d80ff20;
  border-radius: 50%;
  color: #303133;
}

::v-deep .el-calendar-table td.is-selected .el-calendar-day {
  background-color: #2d80ff;
  border-radius: 50%;
  color: #ffffff;
}

::v-deep .el-calendar-table td.is-selected {
  background-color: transparent;
}

::v-deep .el-calendar__body {
  width: 100%;
  padding: 0;
  font-size: 14px;
}
.calendar-point {
  width: 5px;
  height: 5px;
  position: relative;
  left: 16px;
  top: -8px;
  border-radius: 50%;
  background-color: #567bfd;

  &.others {
    background: #fd994a;
  }

  &.finished {
    background-color: #d2d2d2;
  }
}
.cale-message-list {
  padding: 20px;
}
.items{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.i-left,.i-right{
    display: flex;
    align-items: center;
    gap: 10px;
}
.radius{
    background: #567bfd;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
</style>
