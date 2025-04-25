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
  <TempEditor3 v-if="propsData.props.temp == '3'" :propsData="propsData" :ide="ide" @update="update" />
  <TempEditor4 v-if="propsData.props.temp == '4'" :propsData="propsData" :ide="ide" @update="update" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import TempEditor1 from './temp1/Editor';
import TempEditor2 from './temp2/Editor';
import TempEditor3 from './temp3/Editor';
import TempEditor4 from './temp4/Editor';

const tempList = [
  {
    value: '1',
    label: '模板1'
  },
  {
    value: '2',
    label: '模板2'
  },
  {
    value: '3',
    label: '模板3'
  },
  {
    value: '4',
    label: '模板4'
  }
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
