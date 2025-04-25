<template>
  <div
    class="notice"
    :style="{
      ...compProps.style,
      padding: addPxIfNeeded(compProps.style.padding),
      margin: addPxIfNeeded(compProps.style.margin),
      borderRadius: addPxIfNeeded(compProps.style.borderRadius)
    }"
  >
    <div class="notice-head">
      <div class="head-left">{{ compProps.attr.title }}</div>
      <div class="head-right" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
    </div>
    <div class="notice-content">
      <div class="con-item" @click="to(compProps.attr.path)">
        <div class="item-left">
          <div class="time-month">{{ compProps.attr.time.split('-')[1] + '-' + compProps.attr.time.split('-')[2] }}</div>
          <div class="time-year">{{ compProps.attr.time.split('-')[0] }}</div>
        </div>
        <div class="item-right">
          <div class="item-right-title">{{ compProps.attr.content }}</div>
          <div class="item-right-footer">{{ compProps.attr.createdBy }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { addPxIfNeeded } from '@/components/LowCode/utils/styleUtils';

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean;
}>();

const to = (path: string) => {
  if (!isClick) return;
  ElMessage({
    message: `跳转地址为${path}`,
    type: 'success'
  });
};
</script>

<style scoped>
.notice {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.notice-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  font-size: 26px;
  font-weight: bold;
  color: rgba(16, 16, 16, 1);
}
.head-right {
  font-size: 16px;
  color: #2563eb;
  cursor: pointer;
}
.con-item {
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.item-left {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgba(237, 244, 255, 1);
  text-align: center;
}
.time-year {
  font-size: 20px;
  color: #6b7280;
  margin-top: 6px;
}
.time-month {
  font-size: 28px;
  color: #2563eb;
}
.item-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: rgba(16, 16, 16, 1);
}
.item-right-title {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 28px;
}

.item-right-footer {
  font-size: 16px;
  margin-top: auto;
}
</style>
