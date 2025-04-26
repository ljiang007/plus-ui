<template>
    <!-- 来回切换上一次的数据保留？ -->
    <el-form label-position="top">
      <el-form-item label="模板">
        <el-select v-model="propsData.props.temp" placeholder="请选择模板">
          <el-option v-for="item in tempList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <TempEditor1 v-if="propsData.props.temp == '1'" :propsData="propsData" :ide="ide" @update="update" />
    <TempEditor2 v-if="propsData.props.temp == '2'" :propsData="propsData" :ide="ide" @update="update" />
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import TempEditor1 from './temp1/Editor';
  import TempEditor2 from './temp2/Editor';
  
  const tempList = [
    {
      value: '1',
      label: '模板1'
    },
    {
      value: '2',
      label: '模板2'
    },
  ];
  
  const emit = defineEmits<{
    (e: 'update', propsData: any): void;
  }>();
  const { propsData, ide } = defineProps<{
    propsData: any;
    ide: string;
  }>();
  const update = (value: string) => {
    emit('update', value);
  };
  </script>
  