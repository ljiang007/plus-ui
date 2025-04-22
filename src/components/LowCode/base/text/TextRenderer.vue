<template>
  <div>{{ compProps.text }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();
</script>
