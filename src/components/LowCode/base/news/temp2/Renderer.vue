<template>{{compProps}}</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Timer, View } from '@element-plus/icons-vue';

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
