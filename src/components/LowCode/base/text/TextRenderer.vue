<template>
  <div :style="{ ...compProps.style, fontSize: addPxIfNeeded(compProps.style.fontSize) }">{{ compProps.text }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { addPxIfNeeded } from '../../utils/styleUtils';
const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
