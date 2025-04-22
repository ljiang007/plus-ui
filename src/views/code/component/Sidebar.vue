<template>
    <div class="sidebar">
      <h4 class="_fc-l-title">通用组件</h4>
      <ComponentsList :list="basics" />
      <h4 class="_fc-l-title">布局组件</h4>
      <ComponentsList :list="layout" />
      <h4 class="_fc-l-title">自定义组件</h4>
      <ComponentsList :list="custom" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ComponentsList from "@/components/LowCode/public/ComponentsList.vue";
  import { componentMaps } from "@/utils/componentFactory";
  
  const basics = componentMaps.basics;
  const layout = componentMaps.layout;
  const custom = componentMaps.custom;
  </script>
  
  <style scoped>
  .sidebar {
    border: 1px solid #d9d9d9;
    margin: 12px;
  }
  h4 {
    margin: 0;
    padding: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  </style>
  