<template>
  <div
    class="notice"
    :style="{
      ...compProps.style,
      padding: addPxIfNeeded(compProps.style.padding),
      margin: addPxIfNeeded(compProps.style.margin)
    }"
  >
    <div class="notice-head">
      <div class="head-left">
        {{ compProps.attr.title }}
        <div class="line"></div>
      </div>
      <div class="head-right" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
    </div>
    <div class="notice-content">
      <div class="con-item">
        <div class="item1">
          <div class="item1-left">{{ compProps.attr.titContent }}</div>
          <div class="item1-right">
            {{ compProps.attr.time.split('-')[1] }}月
            {{ compProps.attr.time.split('-')[2] }}日
            {{ compProps.attr.time.split('-')[0] }}年
          </div>
        </div>
        <div class="item2">{{ compProps.attr.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
  width: 100%;
}
.notice-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  font-size: 18px;
  font-weight: bold;
  color: #0baca6;
  position: relative;
}
.line {
  position: absolute;
  bottom: -6px;
  left: 30%;
  outline: 2px solid #0baca6;
  width: 30px;
}
.head-right {
  font-size: 18px;
  color: #0baca6;
  cursor: pointer;
}
.notice-content {
  margin-top: 20px;
  font-size: 14px;
  border-left: 3px solid #0baca6;
  padding-left: 10px;
}
.item1 {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}
.item1-left {
  flex: 1;
  color: #0baca6;
}
.item1-right {
  padding-top: 2px;
}
.item2,
.item1-left {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
