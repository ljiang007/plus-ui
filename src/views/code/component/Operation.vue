<template>
  <div class="operation">
    <el-button type="primary" link @click="dialogVisible = true">预览</el-button>
    <el-dialog v-model="dialogVisible" title="预览" width="100%" :before-close="handleClose">
      <ComponentPreview :canvasComponents="canvasComponents" />
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import ComponentPreview from '@/components/LowCode/ComponentPreview.vue';

const { canvasComponents } = defineProps<{
  canvasComponents: any;
}>();

const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};

// const preview = () => {
//   router.push('/preview');
// };
</script>

<style scoped>
.operation {
  padding: 20px;
}
::v-deep(.el-dialog) {
  padding: 0 !important;
}
::v-deep(.el-overlay .el-overlay-dialog .el-dialog .el-dialog__body) {
  padding: 0 !important;
}
</style>
