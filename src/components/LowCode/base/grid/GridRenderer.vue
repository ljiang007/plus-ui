<template>
  <el-row>
    <el-col v-for="item in compProps.children" :key="item.id" :span="item.props.attr.span">
      <div class="col-box" @click.stop="selectComponent(item.id)">
        {{ item.id }}
      </div>
      <!-- <component :is="componentRendererMap[item.type]" :compProps="item.props" @select="select" /> -->
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { compProps } = defineProps<{
  compProps: any;
}>();

const emit = defineEmits(['select']);

const select = (component: any) => {
  emit('select', component);
};

const selectComponent = (id: string) => {
  console.log('1111', id);
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
</style>
