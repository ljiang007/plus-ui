<template>
  <el-form label-position="top" v-if="ide == 'attr'">
    <el-form-item label="文本">
      <el-input v-model="propsData.props.text" @input="update" />
    </el-form-item>
  </el-form>
  <el-form label-position="top" v-if="ide == 'style'">
    <el-form-item label="字体大小">
      <el-input-number v-model="propsData.props.style.fontSize" :min="1" :max="30"  @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="propsData.props.style.color" @input="update" />
    </el-form-item>
    <el-form-item label="对齐方式">
      <el-select v-model="propsData.props.style.textAlign" @input="update">
        <el-option label="左对齐" value="left"></el-option>
        <el-option label="右对齐" value="right"></el-option>
        <el-option label="居中对齐" value="center"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const { propsData } = defineProps<{
  propsData: any;
  ide: string;
}>();

const update = (value: string) => {
  emit('update', propsData);
};
</script>
