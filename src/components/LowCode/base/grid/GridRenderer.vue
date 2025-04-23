<template>
  <el-row>
    <el-col v-for="child in componentLayout.children" :key="child.id" :span="child.props.attr.span">
      <div class="col-box" @click.stop="handleClick(child)"></div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { componentLayout } = defineProps<{
  componentLayout: any;
}>();

const emit = defineEmits(['select']);

const handleClick = (child: any) => {
  emit('select', {
    ...child,
    type: 'col' // 确保类型是 col
  });
};
</script>

<style scoped>
.col-box {
  min-height: 100px;
  outline: 1px dashed #bbb;
  padding: 2px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  position: relative;
}
.col-box:hover {
  outline: 1px solid #2e73ff;
  z-index: 99;
}
</style>
