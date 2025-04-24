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

<style scoped>
.news-renderer-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-weight: bold;
  font-size: 26px;
}

.more {
  font-size: 16px;
  color: #2563eb;
  cursor: pointer;
}

.main {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
  flex: 1;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.con-tit {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 14px;
}

.con-con {
  font-size: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 28px;
}

.footer {
  margin-top: auto;
  display: flex;
  gap: 30px;
  align-items: center;
}

.footer-left,
.footer-right {
  display: flex;
  align-items: center;
}

.footer-left span,
.footer-right span {
  display: flex;
  align-items: center;
}

.footer-left span:first-child,
.footer-right span:first-child {
  margin-right: 5px;
}
</style>
