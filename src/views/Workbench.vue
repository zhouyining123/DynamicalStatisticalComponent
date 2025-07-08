<template>
  <el-container class="overflow-hidden h-screen w-full bg-(--el-fill-color-light) workbench-root">
    <el-header class="flex h-[56px] items-center justify-between px-[24px] bg-(--el-color-white) shadow-md z-[10] workbench-header">
      <div class="flex header-left items-center">
        <div class="header-title text-[20px] font-semibold text-(--el-text-color-primary) mr-[16px]">工作台</div>
      </div>
      <div class="flex header-chart-type flex-1 justify-end min-w-0 gap-x-[10px]">
        <ChartTypeList />
      </div>
    </el-header>
    <el-container class="flex workbench-main gap-x-[10px] flex-row">
      <el-aside width="310px" class="flex workbench-data-config gap-[10px] flex-col justify-between">
        <div class="center-section rounded-[6px] mb-[0px] p-[0px] overflow-hidden bg-(--el-color-white) flex flex-col flex-[2_1_0] min-h-[320px]">
          <ChartConfig />
        </div>
      </el-aside>
      <el-main class="flex workbench-preview flex-[1_1_0] py-2.5 px-0 flex-col gap-y-[10px]">
        <ChartPreview />
      </el-main>
      <el-aside width="310px" class="flex workbench-item-config gap-[10px] flex-col justify-between">
        <div class="center-section rounded-[6px] mb-[0px] p-[0px] overflow-hidden bg-(--el-color-white) flex flex-col flex-[2_1_0] min-h-[320px]"></div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// import IndicatorList from './IndicatorList.vue'
// import DimensionList from './DimensionList.vue'
import ChartTypeList from './ChartTypeList.vue'
import ChartConfig from './ChartDataConfig/index.vue'
import ChartPreview from './ChartPreview.vue'
import { dataSource } from '../config/dataSource'
import { ref } from 'vue'

const dataSourceOptions = ref(dataSource)
const selectedSource = ref('business') // 默认选中第一个
</script>

<style scoped>

.workbench-main {
  height: calc(100vh - 56px);
}

.workbench-data-config {
  background: none;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
}

.workbench-preview {
  background: none;
  padding: 10px 0;
  box-sizing: border-box;
  min-width: 0;
}

.workbench-preview>* {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0;
  overflow: hidden;
  height: 100%;
  margin-bottom: 0;
}

.workbench-item-config {
  background: none;
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
}

.aside-section {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0;
  overflow: hidden;
  margin-bottom: 0;
}

.center-section {
  box-shadow: 0 2px 8px #f0f1f2;
}
</style>