<template>
    <!-- 来回切换上一次的数据保留？ -->
  <el-radio-group v-model="localProps.props.temp" @change="tempChange">
    <el-radio value="1" size="large">模板1</el-radio>
    <el-radio value="2" size="large">模板2</el-radio>
  </el-radio-group>
  <TempEditor1 v-if="localProps.props.temp == '1'" :propsData="localProps" :ide="ide" @update="update" />
  <TempEditor2 v-if="localProps.props.temp == '2'" :propsData="localProps" :ide="ide" @update="update" />
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

const localProps = reactive({ ...propsData });

const update = (value: string) => {
  emit('update', localProps);
};

//新闻初始数据
const initNews = componentMaps.custom[0];

const tempChange = (value: string) => {
  // 触发更新事件，通知父组件数据变化
  emit('update', localProps);
};
</script>
