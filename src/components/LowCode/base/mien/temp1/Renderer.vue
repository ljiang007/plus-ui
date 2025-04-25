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
      <el-row :gutter="24">
        <el-col
          :span="24 / compProps.attr.children.length"
          v-for="item in compProps.attr.children"
          :key="item.title"
          @click="to(item.path, item.txt)"
          class="mien-item"
        >
          <div class="image">
            <img width="100%" height="100%" :src="item.image" alt="" />
          </div>
          <div class="txt">{{ item.txt }}</div>
        </el-col>
      </el-row>
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
.notice-content {
  margin-top: 20px;
}
.image {
  height: 200px;
}
img {
  border-radius: 10px;
}
.txt {
  font-size: 16px;
  color: rgba(16, 16, 16, 1);
  margin-top: 10px;
  text-align: center;
}
.mien-item {
  cursor: pointer;
}
</style>
