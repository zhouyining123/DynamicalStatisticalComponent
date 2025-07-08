<template>
  <div class="config-header">
    <div class="config-label">数据源</div>
  </div>
  <el-select v-model="selectedSource" placeholder="请选择数据源" class="source-select">
    <el-option v-for="item in dataSourceOptions" :key="item.key" :label="item.name" :value="item.key" />
  </el-select>
</template>

<script setup lang="ts">
import { dataSource } from '@/config/dataSource'
import { useWorkbenchStore } from '@/store'
import { ref } from 'vue'
// 获取当前图表类型
const workbenchStore = useWorkbenchStore()
const currentDataSource = ref(workbenchStore.currentDataSource)

const dataSourceOptions = ref(dataSource)
const selectedSource = ref('business') // 默认选中第一个

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

.required {
  color: #f56c6c;
  margin-left: 2px;
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

.source-select {
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