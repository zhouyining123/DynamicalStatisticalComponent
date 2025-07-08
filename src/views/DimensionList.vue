<template>
  <div class="dimension">
    <div class="header">
      <span class="title">维度</span>
      <div class="header-actions">
        <!-- <el-icon><Search /></el-icon>
        <el-icon><RefreshRight /></el-icon> -->
      </div>
    </div>
    <div class="dimension-list">
      <div v-for="item in dimensions" :key="item.name" class="dimension-item">
        <img class="dimension-icon" :src="dimensionIcon" alt="dim" />
        <span class="dimension-name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dimensionOpts } from '../config/dimension'
import type { Dimension } from '../types';
// import { Search, RefreshRight, Plus, ArrowDown } from '@element-plus/icons-vue'

const props = defineProps<{
  sourceKey: string
}>()

const dimensionIcon = new URL('../assets/icon/itemTypes/dimension.svg', import.meta.url).href
const dimensions = computed<Dimension[]>(() => {
  return dimensionOpts[props.sourceKey] || []
})
</script>

<style scoped>
.dimension {
  background: #fff;
  /* border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2; */
  width: 100%;
  padding: 0 0 12px 0;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.title {
  font-size: 18px;
  font-weight: 500;
}

.header-actions {
  display: flex;
  gap: 8px;
  color: #888;
}

.dimension-bar {
  display: flex;
  align-items: center;
  padding: 10px 18px 0 18px;
  font-size: 14px;
  color: #888;
}

.dimension-label {
  flex: 1;
}

.add-btn {
  margin-left: 8px;
  cursor: pointer;
}

.collapse-btn {
  margin-left: 8px;
  cursor: pointer;
}

.dimension-list {
  /* max-height: 340px; */
  overflow-y: auto;
  padding: 0 8px 0 8px;
}

.dimension-item {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  font-size: 15px;
  color: #222;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  background: #f9fafbc9;
  margin-bottom: 5px;
}

.dimension-item:hover {
  background: #f5f7fa;
}

.dimension-icon {
  width: 14px;
  height: 14px;
  margin-right: 10px;
}

.dimension-name {
  font-size: 15px;
}
</style>