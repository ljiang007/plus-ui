<template>
  
  <el-row>
    <el-col v-for="item in compProps.children" :key="item.id" :span="item.props.attr.span">
      <div class="col-box" @click.stop="selectComponent(item)" :class="{ 'is-selected': isSelected }">
        {{ item.id }}
      </div>
      <!-- <component :is="componentRendererMap[item.type]" :compProps="item.props" @select="select" /> -->
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { compProps, isSelected } = defineProps<{
  compProps: any;
  isSelected: boolean;
}>();

const emit = defineEmits(['select']);

const selectComponent = (component) => {
  emit('select', component);
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
.solid {
}
</style>
