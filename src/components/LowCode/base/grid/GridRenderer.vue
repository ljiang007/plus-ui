<template>
  
  <el-row>
    <el-col v-for="item in compProps.children" :key="item.id" :span="item.props.attr.span">
      <div class="col-box" @click.stop="selectComponent(item)" :class="{ 'is-selected': isSelected }">
        <VueDraggable 
          v-model="item.children" 
          group="components" 
          item-key="id" 
          class="col-container"
          @add="handleAdd($event, item)"
        >
          <ComponentRenderer
            v-for="child in item.children"
            :key="child.id"
            :component="child"
            :is-selected="selectedChildId === child.id"
            @select="selectChild"
            @delete="handleDelete(item, child)"
          />
        </VueDraggable>
      </div>
      <!-- <component :is="componentRendererMap[item.type]" :compProps="item.props" @select="select" /> -->
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import ComponentRenderer from '@/components/LowCode/ComponentRenderer.vue';

const { compProps, isSelected } = defineProps<{
  compProps: any;
  isSelected: boolean;
}>();

const emit = defineEmits(['select']);
const selectedChildId = ref<string | null>(null);

const selectComponent = (component) => {
  emit('select', component);
};

// 处理组件选中
const selectChild = (component) => {
  selectedChildId.value = component.id || null;
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
    selectedChildId.value = item.children[newIndex].id || null;
    emit('select', item.children[newIndex]);
  }
};

// 处理组件删除
const handleDelete = (parent, component) => {
  if (parent.children) {
    parent.children = parent.children.filter((c) => c.id !== component.id);
    
    // 删除后默认选中父元素
    selectedChildId.value = null;
    emit('select', parent);
  }
};
</script>

<style scoped>
.col-box {
  min-height: 100px;
  outline: 1px dashed #bbb;
  box-sizing: border-box;
  background-color: #fdfdfd;
  position: relative;
}

.col-box:hover {
  outline: 1px solid #2e73ff;
  z-index: 9;
}

.col-container {
  min-height: 100px;
  width: 100%;
  padding: 2px;
}
</style>
