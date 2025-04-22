<template>
  <div>
    {{ selectedComponent }}

    <component :is="componentEditorMap[selectedComponent.type]" v-if="selectedComponent" :propsData="selectedComponent" @update="update" />
  </div>
</template>

<script setup lang="ts">
import { componentEditorMap } from '@/utils/componentFactory';
import { defineEmits } from 'vue';
const { selectedComponent } = defineProps<{
  selectedComponent: any;
}>();

const emit = defineEmits(['update']);
const update = (propsData: any) => {
  emit('update', propsData);
};
</script>
