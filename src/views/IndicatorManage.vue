<template>
  <div class="indicator-manage-root">
    <el-header class="indicator-header">
      <div class="header-title">指标管理</div>
    </el-header>
    <div class="indicator-main">
      <div class="type-list-container">
        <div class="list-header">指标类型</div>
        <div class="list-content">
          <div
            v-for="(item, idx) in typeList"
            :key="item"
            :class="['list-item', { active: idx === selectedIndex }]"
            @click="selectType(idx)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%; height: 100%">
          <el-table-column prop="index" label="序号" width="60" align="center" />
          <el-table-column prop="name" label="指标名称" min-width="120" />
          <el-table-column prop="desc" label="指标描述" min-width="180" />
          <el-table-column prop="enabled" label="是否启用" width="100">
            <template #default="scope">
              <el-tag :type="scope.row.enabled ? 'success' : 'info'">
                {{ scope.row.enabled ? '是' : '否' }}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IndicatorType, Indicator } from '../types'

const typeList: IndicatorType[] = ['设备', '建筑物', '日常值班', '日常巡检']
const selectedIndex = ref(0)
function selectType(idx: number) {
  selectedIndex.value = idx
}

const tableData = ref<Indicator[]>([
  { index: 1, name: '温度', desc: '设备温度实时监测', enabled: true , dataSource: '设备' },
  { index: 2, name: '湿度', desc: '设备湿度实时监测', enabled: false },
  { index: 3, name: '电压', desc: '设备电压监测', enabled: true },
  { index: 4, name: '能耗', desc: '设备能耗统计', enabled: true },
])
</script>

<style scoped lang="scss">
.indicator-manage-root {
  height: 100%;
  width: 100%;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
}

.indicator-header {
  height: 56px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 10;
  flex-shrink: 0;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  color: #222;
}

.indicator-main {
  flex-grow: 1;
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow: hidden;
}

.type-list-container,
.table-container {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  flex-direction: column;
}

.type-list-container {
  width: 300px;
  flex-shrink: 0;
  padding: 20px 0;
}

.table-container {
  flex-grow: 1;
  padding: 20px;
}

.list-header {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 0 24px 12px 24px;
  border-bottom: 1px solid #f0f0f0;
}

.list-content {
  padding-top: 8px;
  overflow-y: auto;
}

.list-item {
  padding: 12px 24px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
    font-weight: 500;
  }
}
</style> 