<template>
  <!-- 来回切换上一次的数据保留？ -->
  <el-radio-group v-model="propsData.props.temp">
    <el-radio value="1" size="large">模板1</el-radio>
    <el-radio value="2" size="large">模板2</el-radio>
  </el-radio-group>
  <TempEditor1 v-if="propsData.props.temp == '1'" :propsData="propsData" :ide="ide" @update="update" />
  <TempEditor2 v-if="propsData.props.temp == '2'" :propsData="propsData" :ide="ide" @update="update" />
  <!-- {{ propsData.props.temp }} -->
</template>

<script setup lang="ts">
import TempEditor1 from './temp1/Editor';
import TempEditor2 from './temp2/Editor';
import { defineProps, ref, reactive } from 'vue';
import { componentMaps } from '@/utils/componentFactory';

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
}>();

const { propsData } = defineProps<{
  propsData: any;
  ide: string;
}>();

const update = (value: string) => {
  emit('update', value);
};
</script>
