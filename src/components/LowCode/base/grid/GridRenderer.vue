<template>
  <el-row>
    <el-col v-for="item in compProps.children" :key="item.id" :span="item.props.attr.span">
      <div 
        class="col-box" 
        @click.stop="selectComponent(item)" 
        :class="{ 'col-selected': item.id === selectedColId }"
        :data-col-id="item.id"
      >
        <div class="col-title">{{ item.label || '列' }} - {{ item.id }}</div>
        
        <VueDraggable 
          v-model="item.children" 
          :group="{ name: 'colComponents', pull: true, put: true }"
          item-key="id" 
          class="col-container"
          @add="handleAdd($event, item)"
        >
          <ComponentRenderer
            v-for="child in item.children"
            :key="child.id"
            :component="child"
            :is-selected="selectedComponentId === child.id"
            :selectedColId="selectedColId"
            :selectedComponentId="selectedComponentId"
            @select="selectChild"
            @delete="handleDelete(item, child)"
          />
        </VueDraggable>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import ComponentRenderer from '@/components/LowCode/ComponentRenderer.vue';

const props = defineProps<{
  compProps: any;
  isSelected: boolean;
  selectedColId?: string | null;
  selectedComponentId?: string | null;
}>();

const emit = defineEmits(['select', 'update']);

// 选中col列
const selectComponent = (component) => {
  // 发送选中事件到Canvas组件
  emit('select', { ...component, type: 'col' });
};

// 处理子组件选中
const selectChild = (component) => {
  // 发送子组件选中事件
  emit('select', component);
};

// 处理新组件添加
const handleAdd = (event, item) => {
  // 获取新添加的组件索引
  const newIndex = event.newIndex;
  
  // 确保children数组存在
  if (!item.children) {
    item.children = [];
  }
  
  // 自动选中新添加的组件
  if (item.children[newIndex]) {
    emit('select', item.children[newIndex]);
  }
  
  // 通知更新
  emit('update', props.compProps);
};

// 处理组件删除
const handleDelete = (parent, component) => {
  if (parent.children) {
    parent.children = parent.children.filter((c) => c.id !== component.id);
    
    // 删除后默认选中父元素
    emit('select', parent);
  }
  
  // 通知更新
  emit('update', props.compProps);
};
</script>

<style scoped>
.col-box {
  min-height: 100px;
  outline: 1px dashed #bbb;
  box-sizing: border-box;
  background-color: #fdfdfd;
  position: relative;
  display: flex;
  flex-direction: column;
}

.col-title {
  padding: 4px;
  background-color: #f0f0f0;
  font-size: 12px;
  color: #666;
}

.col-container {
  min-height: 80px;
  width: 100%;
  padding: 2px;
  flex-grow: 1;
}

.col-box:hover {
  outline: 1px solid #2e73ff;
  z-index: 9;
}

.col-box.col-selected {
  outline: 2px solid #2e73ff;
  z-index: 1;
  outline-offset: -1px;
}
</style>
