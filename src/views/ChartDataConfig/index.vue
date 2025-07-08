<template>
  <div class="header">
    <span class="title">数据配置</span>
  </div>
  <div class="chart-config-page">
    <template v-for="(item, index) in currentChartTypeDataConfig" :key="item.key">
      <el-divider v-if="index !== 0" :style="{ 'border-top': '1px solid var(--gray-300)', margin: '10px 0' }" />
      <component :is="item.component" :name="item.name" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { chartTypeDataConfig } from '@/config/chartTypeDataConfig'
import { useWorkbenchStore } from '@/store'
import { computed } from 'vue'

const workbenchStore = useWorkbenchStore();
const currentChartType = computed(() => workbenchStore.currentChartType);
const currentChartTypeDataConfig = computed(() => chartTypeDataConfig[currentChartType.value]?.DataConfigItems || []);


// watch(currentChartType, (newVal, oldVal) => {
  
// })


</script>

<style scoped>
.chart-config-page {
  width: 268px;
  background: #fff;
  border-radius: 8px;
  padding: 0px 16px;
  font-size: 15px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--el-color-primary-light-7);
}
</style> 