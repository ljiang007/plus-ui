<template>
    <!-- {{ propsData }} -->
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { propsData } = defineProps<{
  propsData: any;
}>();

const emit = defineEmits(['update']);

const update = (propsData: any) => {
  emit('update', propsData);
};
</script>
