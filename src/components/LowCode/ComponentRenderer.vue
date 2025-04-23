<template>
  <!-- 递归组件渲染 -->
  <!-- 基础只需要传component.props，布局组则需要传整个 component-->
  <div class="component-renderer" :class="{ 'is-selected': isSelected }" @click="$emit('select', component)">
    <component
      :is="componentRendererMap[component.type]"
      :compProps="isGrid ? component : component.props"
      @select="select"
      :isSelected="isSelected"
    />
    <div class="delete-icon" @click="$emit('delete', component)" v-if="isSelected">
      <el-icon><DeleteFilled /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { componentRendererMap } from '@/utils/componentFactory';

const emit = defineEmits(['select', 'delete']);

const select = (component: any) => {
  emit('select', component);
};

const props = defineProps<{
  component: any;
  isSelected?: boolean;
}>();

const isGrid = computed(() => {
  return props.component.type === 'grid';
});
</script>

<style>
.component-renderer {
  outline: 1px dashed #ddd;
  padding: 4px;
  position: relative;
  cursor: pointer;
}

/* 区分换行不换行 */
.no-wrap {
  display: inline-block;
  vertical-align: top;
  margin: 2px;
}

.component-renderer:hover {
  outline: 1px solid #2e73ff;
}

.component-renderer.is-selected {
  outline: 2px solid #2e73ff;
  z-index: 1;
  outline-offset: -1px;
}

.delete-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: red;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
