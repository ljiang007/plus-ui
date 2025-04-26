<template>
  <div
    class="notice"
    :style="{
      ...compProps.style,
      padding: addPxIfNeeded(compProps.style.padding),
      margin: addPxIfNeeded(compProps.style.margin),
      borderRadius: addPxIfNeeded(compProps.style.borderRadius)
    }"
  >
    <div class="notice-head">
      <div class="head-left">{{ compProps.attr.title }}</div>
    </div>
    <div class="notice-content">
      {{ compProps.attr.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { addPxIfNeeded } from '@/components/LowCode/utils/styleUtils';

const { compProps, isClick } = defineProps<{
  compProps: any;
  isClick: boolean;
}>();
</script>

<style scoped>
.notice {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.notice-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  font-size: 26px;
  font-weight: bold;
  color: rgba(16, 16, 16, 1);
}
.notice-content{
  text-indent: 2em;
  font-size: 20px;
  color: rgba(75,85,99,1);
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  line-height: 28px;
}
</style>
