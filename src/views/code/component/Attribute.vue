<template>
  <div class="attr">
    <!-- {{ selectedComponent }} -->
    <el-tabs v-model="activeName" class="demo-tabs" v-if="selectedComponent">
      <el-tab-pane label="样式配置" name="style">
        <component :is="componentEditorMap[selectedComponent.type]" ide="style" :propsData="selectedComponent" @update="update" />
      </el-tab-pane>
      <el-tab-pane label="属性配置" name="attr">
        <component :is="componentEditorMap[selectedComponent.type]" ide="attr" :propsData="selectedComponent" @update="update" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { componentEditorMap } from '@/utils/componentFactory';
import { defineEmits } from 'vue';
const { selectedComponent } = defineProps<{
  selectedComponent: any;
}>();

const activeName = ref<string>('style');

const emit = defineEmits(['update']);
const update = (propsData: any) => {
  emit('update', propsData);
};
</script>

<style scoped>
/* 只在此区域超出高度出现滚动条，不要出现全屏滚动条 */
.attr {
  padding: 20px;
  padding-top: 50px;
  overflow-y: auto;
  height: calc(100vh - 35px);
}
</style>
