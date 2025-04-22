<template>
    <div>{{ propsData.text }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { propsData } = defineProps<{
  propsData: any;
}>();
</script>
