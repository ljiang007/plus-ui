<template>
  <div class="canvas">
    <!-- 总数据：{{ canvasComponents.length }} -->
    <div class="canvas-content">
      <VueDraggable v-model="canvasComponents" group="components" item-key="id" class="canvas-container" @add="handleAdd">
        <ComponentRenderer
          v-for="element in canvasComponents"
          :key="element.id"
          :component="element"
          :is-selected="selectedComponentId === element.id"
          @select="handleSelect"
          @delete="handleDelete"
        />
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus';
import { ref, watch } from 'vue';
import ComponentRenderer from '@/components/LowCode/ComponentRenderer.vue';

interface CanvasComponent {
  type: string;
  label: string;
  id?: string;
}

const canvasComponents = ref<CanvasComponent[]>([]);
const selectedComponentId = ref<string | null>(null);
const emit = defineEmits<{
  (e: 'select', component: CanvasComponent): void;
  (e: 'update', components: CanvasComponent[]): void;
}>();

watch(canvasComponents, (newComponents) => {
  emit('update', newComponents);
}, { deep: true });

// 处理组件选中
const handleSelect = (component: CanvasComponent) => {
  selectedComponentId.value = component.id || null;
  emit('select', component);
};

// 处理新组件添加
const handleAdd = (event: any) => {
  // 获取新添加的组件索引
  const newIndex = event.newIndex;
  // 自动选中新添加的组件
  if (canvasComponents.value[newIndex]) {
    selectedComponentId.value = canvasComponents.value[newIndex].id || null;
  }
  emit('select', canvasComponents.value[newIndex]);
};

// 处理组件删除
const handleDelete = (component: CanvasComponent) => {
  canvasComponents.value = canvasComponents.value.filter((c) => c.id !== component.id);
  //默认选中最后一个组件
  if (canvasComponents.value.length > 0) {
    selectedComponentId.value = canvasComponents.value[canvasComponents.value.length - 1].id || null;
  }
  emit('select', canvasComponents);
};
</script>

<style scoped lang="scss">
.canvas {
  background: #f5f5f5;
  padding: 20px;
  height: calc(100% - 60px);
  box-sizing: border-box;
}

.canvas-content {
  background: #fff;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;

  :deep(.el-col) {
    border-radius: 4px;

    div {
      background: red;
    }
  }
}

.canvas-container {
  min-height: 100%;
  padding: 2px;
}

.canvas-item {
  padding: 10px;
  margin: 5px 0;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
