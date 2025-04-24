<template>
  <el-button :type="compProps.attr.type" :style="{ ...compProps.style, fontSize: compProps.style.fontSize + 'px' }">{{ compProps.text }}</el-button>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
