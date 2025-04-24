<template>
  <!-- <div class="news" v-if="compProps.attr.temp == '1'">
    <div class="header">
      <div class="title">{{ compProps.attr.title }}</div>
      <div class="more" @click="to(compProps.attr.morePath)">{{ compProps.attr.more }}</div>
    </div>

    <div class="main" @click="to(compProps.attr.path)">
      <div class="img">
        <el-image style="width: 240px; height: 160px; border-radius: 10px" :src="compProps.attr.image"></el-image>
      </div>
      <div class="content">
        <div class="con-tit">{{ compProps.attr.conTitle }}</div>
        <div class="con-con">
          {{ compProps.attr.content }}
        </div>
        <div class="footer">
          <div class="footer-left">
            <span
              ><el-icon><component :is="compProps.attr.time_icon" /></el-icon
            ></span>
            <span style="padding-top: 2px">{{ compProps.attr.time }}</span>
          </div>
          <div class="footer-right">
            <span
              ><el-icon><component :is="compProps.attr.perNum_icon" /></el-icon
            ></span>
            <span>{{ compProps.attr.perNum }}人</span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <TempRenderer1 v-if="compProps.temp == '1'" :compProps="compProps" :isClick="isClick" />
  <TempRenderer2 v-if="compProps.temp == '2'" :compProps="compProps" :isClick="isClick" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Timer, View } from '@element-plus/icons-vue';

import TempRenderer1 from './temp1/Renderer';
import TempRenderer2 from './temp2/Renderer';

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean;
  isSelected?: boolean;
  selectedComponentId?: any;
  selectedColId?: any;
  type?:string
}>();

const emit = defineEmits<{
  (e: 'update', propsData: any): void;
  (e: 'select', propsData: any): void;
}>();
const update = (value: string) => {
  emit('update', localProps);
};
const select = (component: any) => {
  emit('select', component);
};
</script>

<style scoped>
.news {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-weight: bold;
  font-size: 26px;
}
.more {
  font-size: 16px;
  color: #2563eb;
  cursor: pointer;
}
.main {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.content {
  flex: 1;
}
.con-tit {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 14px;
}
.con-con {
  font-size: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 28px;
}
.content {
  display: flex;
  flex-direction: column;
}
.footer {
  margin-top: auto;
  display: flex;
  gap: 30px;
  align-items: center;
}
.footer-left,
.footer-right {
  display: flex;
  align-items: center;
}
.footer-left span,
.footer-right span {
  display: flex;
  align-items: center;
}
.footer-left span:first-child,
.footer-right span:first-child {
  margin-right: 5px;
}
</style>
