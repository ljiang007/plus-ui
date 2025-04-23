<template>
  <el-image :style="compProps.style" :src="compProps.attr.src" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
