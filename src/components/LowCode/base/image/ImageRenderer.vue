<template>
  <el-image :style="{ ...compProps.style, width: compProps.style.width + 'px', height: compProps.style.height + 'px' }" :src="compProps.attr.src" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
