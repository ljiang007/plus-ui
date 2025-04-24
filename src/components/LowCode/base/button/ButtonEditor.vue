<template>
  <el-form label-position="top" v-if="ide == 'attr'">
    <el-form-item label="名称">
      <el-input v-model="propsData.props.text" @input="update" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="propsData.props.attr.type" placeholder="请选择" @change="update">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <el-form label-position="top" v-if="ide == 'style'">
    <el-form-item label="字体大小">
      <el-input-number v-model="propsData.props.style.fontSize" :min="1" :max="30" controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="propsData.props.style.color" @input="update" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const options = reactive([
  { value: 'default', label: '默认' },
  { value: 'primary', label: '主要' },
  { value: 'success', label: '成功' },
  { value: 'warning', label: '警告' },
  { value: 'danger', label: '危险' },
  { value: 'info', label: '信息' },
  { value: 'text', label: '文本' }
]);

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const { propsData, ide } = defineProps<{
  propsData: any;
  ide: string;
}>();

const update = (value: string) => {
  emit('update', propsData);
};
</script>

<style scoped>
::v-deep(.el-input-number) {
  margin-left: 0px;
}
</style>
