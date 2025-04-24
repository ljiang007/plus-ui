<template>
  <el-form label-position="top" v-if="ide == 'style'">
    <div class="other-setting">基础设置</div>
    <el-form-item label="内边距">
      <el-input-number v-model="propsData.props.style.padding" :min="1"  controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="外边距">
      <el-input-number v-model="propsData.props.style.margin" :min="1" controls-position="right" @input="update" />
      <el-button disabled>px</el-button>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="propsData.props.style.background" @input="update" />
    </el-form-item>
  </el-form>
  <el-form label-position="top" v-if="ide == 'attr'">
    <div class="other-setting">新闻设置</div>
    <el-form-item label="新闻标题">
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
    <el-form-item label="内容标题">
      <el-input v-model="propsData.props.attr.conTitle" @input="update" />
    </el-form-item>
    <el-form-item label="内容">
      <el-input v-model="propsData.props.attr.content" @input="update" />
    </el-form-item>
    <el-form-item label="新闻图片">
      <el-input v-model="propsData.props.attr.image" @input="update" />
    </el-form-item>

    <div class="other-setting">其他设置</div>
    <el-form-item label="跳转地址">
      <el-input v-model="propsData.props.attr.path" placeholder="请填写点击后跳转的地址" @input="update" />
    </el-form-item>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="时间">
          <el-input v-model="propsData.props.attr.time" @input="update" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <el-form label-position="top" v-if="ide == 'style'">
    <!-- <el-form-item label="字体大小">
        <el-input-number v-model="propsData.props.style.fontSize" :min="1" :max="30" @input="update" />
        <el-button disabled>px</el-button>
      </el-form-item> -->
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
  emit('update', propsData);
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
