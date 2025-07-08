<template>
  <div class="indicator">
    <div class="header flex justify-between items-center p-10">
      <span class="title">指标</span>
      <div class="header-actions">
        <el-icon>
          <Search />
        </el-icon>
        <el-icon>
          <RefreshRight />
        </el-icon>
      </div>
    </div>
    <div class="indicator-list">
      <div v-for="item in indicators" :key="item.name" class="indicator-item">
        <img class="indicator-icon" :src="indicatorIcon" alt="fx" />
        <span class="indicator-name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Search, RefreshRight } from '@element-plus/icons-vue'
import { indicatorOpts } from '../config/indicator'
import type { Indicator } from '../types';

const props = defineProps<{
  sourceKey: string
}>()

const indicatorIcon = new URL('../assets/icon/itemTypes/indicator.svg', import.meta.url).href

const indicators = computed<Indicator[]>(() => {
  return indicatorOpts[props.sourceKey] || []
})
</script>

<style scoped>
.indicator {
  background: #fff;
  /* border-radius: 6px; */
  /* box-shadow: 0 2px 8px #f0f1f2; */
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

.indicator-bar {
  display: flex;
  align-items: center;
  padding: 10px 18px 0 18px;
  font-size: 14px;
  color: #888;
}

.indicator-label {
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

.indicator-list {
  /* max-height: 340px; */
  overflow-y: auto;
  padding: 0 8px 0 8px;
}

.indicator-item {
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

.indicator-item:hover {
  background: #f5f7fa;
}

.indicator-icon {
  width: 14px;
  height: 14px;
  margin-right: 10px;
}

.indicator-name {
  font-size: 15px;
}
</style>