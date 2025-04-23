<template>
  <div class="code">
    <el-row type="flex">
      <el-col :span="4"> <Sidebar /> </el-col>
      <el-col :span="16">
        <Operation :canvasComponents="canvasComponents" />
        <Canvas />
      </el-col>
      <el-col :span="4"> <Attribute :selectedComponent="selectedComponent" @update="handleUpdate" /> </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './component/Sidebar.vue';
import Canvas from './component/Canvas.vue';
import Attribute from './component/Attribute.vue';
import Operation from './component/Operation.vue';
import { ref } from 'vue';

interface CanvasComponent {
  type: string;
  label: string;
  id?: string;
  props?: any;
}

const selectedComponent = ref<any>(null); //当前选中的组件数据
const canvasComponents = ref<CanvasComponent[]>([]); //画布上的所有组件数据

const handleSelect = (component: any) => {
  selectedComponent.value = component;
};

const updateCanvas = (components: CanvasComponent[]) => {
  canvasComponents.value = components;
};

const handleUpdate = (propsData: any) => {
  console.log('handleUpdate111', canvasComponents);
  //使用递归canvasComponents，找到selectedComponent，并更新propsData
  console.log('handleUpdate222', propsData);
  // canvasComponents.value.forEach((component) => {
  //   if (component.id === propsData.id) {
  //     component.props = propsData;
  //   }
  // });
};
</script>

<style scoped>
.code {
  height: 100%;
}
.el-row {
  height: 100%;
}
</style>
