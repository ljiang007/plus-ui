<template>
  <div class="canvas">
    <!-- 总数据：{{ canvasComponents.length }} -->
    <div class="canvas-content">
      <VueDraggable v-model="canvasComponents" :group="{ name: 'components', put: ['components', 'colComponents'] }" item-key="id" class="canvas-container" @add="handleAdd">
        <ComponentRenderer
          v-for="element in canvasComponents"
          :key="element.id"
          :component="element"
          :is-selected="selectedComponentId === element.id"
          :selectedColId="selectedColId"
          :selectedComponentId="selectedComponentId"
          @select="handleSelect"
          @delete="handleDelete"
          @update="handleUpdate"
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
  children?: CanvasComponent[];
}

const canvasComponents = ref<CanvasComponent[]>([]);
const selectedComponentId = ref<string | null>(null);
const selectedColId = ref<string | null>(null);
const emit = defineEmits<{
  (e: 'select', component: CanvasComponent | null): void;
  (e: 'update', components: CanvasComponent[]): void;
}>();

watch(
  canvasComponents,
  (newComponents) => {
    emit('update', newComponents);
  },
  { deep: true }
);

// 处理组件选中
const handleSelect = (component: CanvasComponent) => {
  // 清除当前所有选中状态
  selectedComponentId.value = null;
  selectedColId.value = null;
  
  if (component) {
    if (component.type === 'col') {
      // 如果选中的是col列，设置selectedColId
      selectedColId.value = component.id || null;
    } else {
      // 如果选中的是普通组件，设置selectedComponentId
      selectedComponentId.value = component.id || null;
    }
  }
  
  // 通知父组件选中状态变化
  emit('select', component);
};

// 处理新组件添加
const handleAdd = (event: any) => {
  // 获取新添加的组件索引
  const newIndex = event.newIndex;
  
  // 清除可能存在的col选中状态
  selectedColId.value = null;
  
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
  emit('select', canvasComponents.value[canvasComponents.value.length - 1]);
};

// 处理组件更新
const handleUpdate = (component: CanvasComponent) => {
  // 查找并更新组件
  const updateComponent = (components: CanvasComponent[]) => {
    for (let i = 0; i < components.length; i++) {
      if (components[i].id === component.id) {
        components[i] = component;
        return true;
      }
      // 递归查找子组件
      if (components[i].children && components[i].children.length > 0) {
        if (updateComponent(components[i].children)) {
          return true;
        }
      }
    }
    return false;
  };
  
  // 更新组件
  updateComponent(canvasComponents.value);
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
  // width: 1920px;
  // transform: scale(0.644);
  // transform-origin: 0 0;
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
