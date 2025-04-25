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
    </div>
    <div class="notice-content">
      <div class="con-item">
        <div class="item-left">{{ index }}</div>
        <div class="item-right">{{ compProps.attr.content }}</div>
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

const index = ref<string>('01');

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
  border-top: 10px solid #2770ba;
}
.notice-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  font-size: 18px;
  font-weight: bold;
  color: #054182;
}
.head-right {
  font-size: 16px;
  color: #2563eb;
  cursor: pointer;
}
.notice-content {
  margin-top: 20px;
  font-size: 14px;
}
.con-item {
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
}
.item-left {
  width: 32px;
  height: 32px;
  background: #EE512F;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  flex-direction: column;
}
.item-right {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
