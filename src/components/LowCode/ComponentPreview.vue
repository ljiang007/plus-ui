<template>
  <div v-for="component in canvasComponents" :key="component.id" class="component-preview">
    <component :is="componentRendererMap[component.type]" :isClick="true" type="preview" :compProps="component.props" />
  </div>
</template>

<script setup lang="ts">
import { componentRendererMap } from '@/utils/componentFactory';
import { defineProps } from 'vue';
const props = defineProps<{
  canvasComponents: any;
}>();
</script>

<style scoped>
.component-preview {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin: 2px;
}
</style>
