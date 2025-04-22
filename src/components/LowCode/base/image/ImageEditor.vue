<template>
  <div>
    ==={{propsData  }}
    <el-input v-model="propsData.props.attr.src" @input="update" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { propsData } = defineProps<{
  propsData: any;
}>();



const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const update = (value: string) => {
  emit('update', propsData);
};
</script>
