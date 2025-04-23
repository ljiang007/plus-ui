<template>
  <VueDraggable
    v-model="componentList"
    :group="{ name: 'components', pull: 'clone', put: false }"
    :sort="false"
    :clone="cloneComponent"
    item-key="type"
    class="components-list"
  >
    <div class="item" v-for="element in componentList" :data-type="element.type" :key="element.type">
      {{ element.label }}
    </div>
  </VueDraggable>
</template>

<script lang="ts" setup>
import { defineComponent, PropType, ref, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { componentMaps } from '@/utils/componentFactory';

interface ListItem {
  type: string;
  label: string;
  props?: any;
}

const props = defineProps<{
  list: ListItem[];
}>();

const componentList = ref<ListItem[]>([]);

watch(
  () => props.list,
  (newList) => {
    componentList.value = [...newList];
  },
  { immediate: true }
);

const cloneComponent = (item: ListItem) => {
  // 从componentMaps中获取对应组件的初始配置
  const initialConfig =
    componentMaps.basics.find((comp) => comp.type === item.type) ||
    componentMaps.layout.find((comp) => comp.type === item.type) ||
    componentMaps.custom.find((comp) => comp.type === item.type);
  //item的children的长度不等于0，递归加上id
  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      child.id = `${child.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    });
  }
  return {
    ...item,
    props: initialConfig?.props ? JSON.parse(JSON.stringify(initialConfig.props)) : undefined,
    id: `${item.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  };
};
</script>

<style scoped>
.components-list {
  padding: 0 7px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  grid-column-gap: 5px;
}

.item {
  height: 30px;
  line-height: 28px;
  background: #f5f5f5;
  margin-bottom: 5px;
  padding-bottom: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  cursor: move;
}
</style>
