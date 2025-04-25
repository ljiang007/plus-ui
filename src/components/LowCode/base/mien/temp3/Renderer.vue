<template>
  <div :style="{ ...compProps.style, borderRadius: addPxIfNeeded(compProps.style.borderRadius) }">
    <div class="notice">
      <div class="notice-head">
        <div class="head-left">
          {{ compProps.attr.title }}
        </div>
        <div class="head-right" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
      </div>
    </div>
    <div
      class="notice-content"
      :style="{
        background: compProps.style.background,
        padding: addPxIfNeeded(compProps.style.padding),
        margin: addPxIfNeeded(compProps.style.margin)
      }"
    >
      <el-carousel :autoplay="isClick" height="254px">
        <el-carousel-item v-for="item in compProps.attr.children" :key="item.image" class="mien-item" @click="to(item.path, item.txt)">
          <img :src="item.image" style="width: 100%; height: 254px" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { addPxIfNeeded } from '@/components/LowCode/utils/styleUtils';

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean; //区分预览和画布
}>();

const to = (path: string, txt: string | undefined) => {
  if (!isClick) return;
  if (txt) {
    ElMessage({
      message: `${txt}=跳转地址为${path}`,
      type: 'success'
    });
    return;
  }
  ElMessage({
    message: `跳转地址为${path}`,
    type: 'success'
  });
};
</script>

<style scoped>
.notice {
  padding: 0 20px;
  border-bottom: 1px solid #020935;
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
.mien-item {
  cursor: pointer;
}
</style>
