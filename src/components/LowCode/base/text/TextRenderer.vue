<template>
  <div :style="{ ...compProps.style, fontSize: compProps.style.fontSize + 'px' }">{{ compProps.text }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
