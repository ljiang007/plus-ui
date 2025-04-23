<template>
    <div>{{ propsData.text }}</div>
    <el-input v-model="propsData.props.text" @input="update" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const { propsData } = defineProps<{
  propsData: any;
}>();

const update = (value: string) => {
  emit('update', propsData);
};
</script>
