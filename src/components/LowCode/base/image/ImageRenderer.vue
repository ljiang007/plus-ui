<template>
  <el-image :style="{ 
    ...compProps.style, 
    width: addPxIfNeeded(compProps.style.width), 
    height: addPxIfNeeded(compProps.style.height) 
  }" :src="compProps.attr.src" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { addPxIfNeeded } from '../../utils/styleUtils';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
