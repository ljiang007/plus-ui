<template>
  <TempRenderer1 v-if="compProps.temp == '1'" :compProps="compProps" :isClick="isClick" />
  <TempRenderer2 v-if="compProps.temp == '2'" :compProps="compProps" :isClick="isClick" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Timer, View } from '@element-plus/icons-vue';

import TempRenderer1 from './temp1/Renderer';
import TempRenderer2 from './temp2/Renderer';

const props = defineProps<{
  compProps: any;
  isClick: boolean;
  isSelected?: boolean;
  selectedComponentId?: any;
  selectedColId?: any;
  type?: string;
}>();

// 提取主要属性和额外属性
const { compProps, isClick } = props;

// 创建一个对象来保存额外的属性
const extraProps = computed(() => {
  const { isSelected, selectedComponentId, selectedColId, type } = props;
  return { isSelected, selectedComponentId, selectedColId, type };
});

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
  (e: 'select', propsData: any): void;
}>();

const localProps = ref(props.compProps);

const update = () => {
  emit('update', localProps.value);
};

const select = (component: any) => {
  emit('select', component);
};
</script>
