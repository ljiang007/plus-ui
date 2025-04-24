<template>{{propsData}}=={{ ide }}</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
  
  
  const emit = defineEmits<{
    (e: 'update', propsData: any): void;
  }>();
  
  const { propsData } = defineProps<{
    propsData: any;
    ide: string;
  }>();
  
  const update = (value: string) => {
    emit('update', propsData);
  };
</script>