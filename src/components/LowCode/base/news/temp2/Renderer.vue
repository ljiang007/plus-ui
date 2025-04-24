<template>
  <div class="news2">
    <div class="news-header">
      <div class="header-item">
        <div class="header-left">{{ compProps.attr.title }}</div>
        <div class="header-right" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
      </div>
    </div>
    <div class="news-main">
      <div class="main-item">
        <div class="main-left" :class="{ 'select': select }" @click="to(compProps.attr.path)">
          <div class="left-tit">
            <div class="tit-left">{{ compProps.attr.conTitle }}</div>
            <div class="tit-right">
              <span>{{ compProps.attr.time }}</span>
            </div>
          </div>
          <div class="left-con">
            {{ compProps.attr.content }}
          </div>
        </div>
        <div class="main-right">
          <el-image style="width: 177px; height: 120px" :src="compProps.attr.image"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Timer, View } from '@element-plus/icons-vue';

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean;
}>();

const select = ref<boolean>(true);

const to = (path: string) => {
  if (!isClick) return;
  ElMessage({
    message: `跳转地址为${path}`,
    type: 'success'
  });
};
</script>

<style scoped>
.news2 {
  padding: 18px 22px;
  background-color: #fff;
}
.news-header {
  margin-bottom: 20px;
}
.header-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  font-weight: bold;
  font-size: 26px;
}
.header-right {
  color: #0baca6;
  cursor: pointer;
  font-size: 18px;
}
.main-item {
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
}
.main-left {
  border: 1px solid rgba(205, 205, 205, 0.5);
  margin-right: 4px;
  flex: 1;
  height: 100%;
  padding: 17px 13px;
  height: 120px;
  cursor: pointer;
}
.left-tit {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.left-con {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tit-left {
  color: #0baca6;
}
.select {
  border-left: 5px solid #0baca6 !important;
}
</style>
