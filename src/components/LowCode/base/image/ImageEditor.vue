<template>
  <div>
    <el-form label-position="top" v-if="ide == 'attr'">
      <el-form-item label="图片地址">
        <el-input v-model="propsData.props.attr.src" @input="update" />
      </el-form-item>
    </el-form>
    <el-form label-position="top" v-if="ide == 'style'">
      <el-form-item label="宽度">
        <el-input-number v-model="propsData.props.style.width" :min="1" @input="update" />
        <el-button disabled>px</el-button>
      </el-form-item>
      <el-form-item label="高度">
        <el-input-number v-model="propsData.props.style.height" :min="1" @input="update" />
        <el-button disabled>px</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { propsData } = defineProps<{
  propsData: any;
  ide: string;
}>();

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const update = (value: string) => {
  emit('update', propsData);
};
</script>
