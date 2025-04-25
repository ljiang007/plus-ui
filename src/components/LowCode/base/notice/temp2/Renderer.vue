<template>
  <div :style="{ ...compProps.style, borderRadius: addPxIfNeeded(compProps.style.borderRadius) }">
    <div class="notice">
      <div class="notice-head">
        <div class="head-left">{{ compProps.attr.title }}</div>
        <div class="head-right" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
      </div>
    </div>
    <div
      class="notice-content"
      :style="{
        padding: addPxIfNeeded(compProps.style.padding),
        margin: addPxIfNeeded(compProps.style.margin)
      }"
    >
      <div class="con-item">
        <div class="con-item-left">
          <div class="left-img">
            <el-image style="width: 100%; height: 100%" :src="compProps.attr.image"></el-image>
          </div>
          <div class="left-txt">
            <div class="txt-title">{{ compProps.attr.titContent }}</div>
            <div class="txt-content">{{ compProps.attr.content }}</div>
          </div>
        </div>
        <div class="con-item-right">
          <div class="right-time">发布时间：{{ compProps.attr.time }}</div>
        </div>
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
}
.head-right {
  font-size: 12px;
  color: #2563eb;
  cursor: pointer;
}

.con-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.con-item-left {
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
}
.left-img {
  width: 32px;
  height: 32px;
}
.left-txt {
  flex: 1;
}
.txt-title {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.txt-content {
  font-size: 11px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.right-time {
  color: #999;
  font-size: 12px;
}
</style>
