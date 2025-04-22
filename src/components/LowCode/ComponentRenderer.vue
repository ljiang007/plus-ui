<template>
  13{{ component }}
  <!-- 递归组件渲染 -->
  <div class="component-renderer" :class="{ 'is-selected': isSelected }" @click="$emit('select', component)">
    <component :is="componentRendererMap[component.type]" :compProps="component.props" />
    <div class="delete-icon" @click="$emit('delete', component)">
      <el-icon><Delete /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { componentRendererMap } from '@/utils/componentFactory';

defineEmits(['select', 'delete']);

const props = defineProps<{
  component: any;
  isSelected?: boolean;
}>();
</script>

<style>
.component-renderer {
  outline: 1px dashed #ddd;
  padding: 2px;
  position: relative;
  cursor: pointer;
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
  color: red;
  cursor: pointer;
}
</style>
