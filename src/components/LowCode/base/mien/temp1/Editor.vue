<template>
  <el-form label-position="top" v-if="ide == 'style'">
    <div class="other-setting">基础设置</div>
    <el-form-item label="内边距">
      <el-input-number v-model="propsData.props.style.padding" :min="0" controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="外边距">
      <el-input-number v-model="propsData.props.style.margin" :min="0" controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="圆角">
      <el-input-number v-model="propsData.props.style.borderRadius" :min="0" controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="propsData.props.style.background" @input="update" />
    </el-form-item>
  </el-form>
  <el-form label-position="top" v-if="ide == 'attr'">
    <div class="other-setting">风采设置</div>
    <el-form-item label="标题">
      <el-input v-model="propsData.props.attr.title" @input="update" />
    </el-form-item>
    <el-form-item label="more">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input v-model="propsData.props.attr.more" @input="update" />
        </el-col>
        <el-col :span="16">
          <el-input v-model="propsData.props.attr.morePath" placeholder="请输入更多跳转地址" @input="update" />
        </el-col>
      </el-row>
    </el-form-item>
    <div class="other-setting">内容设置</div>
    <div v-for="(item, index) in propsData.props.attr.children" :key="index">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item :label="'文本' + (index + 1)">
            <el-input v-model="item.txt" @input="update" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="'跳转地址' + (index + 1)">
            <el-input v-model="item.path" @input="update" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item :label="'图片' + (index + 1)">
            <el-input v-model="item.image" @input="update" />
          </el-form-item>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';

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

<style scoped>
.other-setting {
  margin-bottom: 10px;
  font-weight: bold;
  padding-left: 10px;
  border-left: 3px solid #409eff;
}
</style>
