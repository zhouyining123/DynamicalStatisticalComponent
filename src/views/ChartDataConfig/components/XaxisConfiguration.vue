<template>
  <div class="config-header">
    <div class="config-label">x轴</div>
    <img class="icon-svg" :src="clearIcon" alt="清除" />
  </div>
  <!-- <div class="config-box">
    <span class="config-label"></span>
  </div> -->
  <el-select v-model="selectedXaxis" placeholder="请选择" class="xaxis-select">
    <el-option v-for="item in xaxisOptions" :key="item.key" :label="item.name" :value="item.key" />
  </el-select>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { dimensionOpts } from '@/config/dimension'
import type { Dimension } from '@/types';

const props = defineProps<{
  sourceKey: string
}>()

// const dimensionIcon = new URL('../assets/icon/itemTypes/dimension.svg', import.meta.url).href
const selectedXaxis = ref<string>('');
const xaxisOptions = computed<Dimension[]>(() => {
  return dimensionOpts[props.sourceKey] || []
})
const clearIcon = new URL('@/assets/icon/clear.svg', import.meta.url).href

</script>

<style scoped lang="scss">
.config-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.config-label {
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
}

.config-content {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.icon-btn {
  background: none;
  border: none;
  padding: 0;
  margin-right: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 24px;
  box-shadow: none;
}

.icon-svg {
  width: 18px;
  height: 18px;
  display: block;
  filter: grayscale(100%) brightness(0.6);
}

.config-box {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border: 1px dashed var(--gray-300);
  background-color: var(--gray-80);
  border-radius: 4px;
  margin: 4px 0;
}

.xaxis-select {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border: 1px dashed var(--gray-300);
  background-color: var(--gray-80);
  border-radius: 4px;
  margin: 4px 0;

  ::v-deep .el-select__wrapper {
    box-shadow: unset !important;
    background: unset !important;
  }
}

</style>