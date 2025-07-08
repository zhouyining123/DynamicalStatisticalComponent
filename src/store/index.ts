import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue' 

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
}) 

export const useWorkbenchStore = defineStore('workbench', {
  state: () => ({
    currentChartType: 'bar', // 当前图表类型
    currentDataSource: '', // 当前数据源
  }),
  getters: {
    // return  this.currentChartType
  },
  actions: {
    changeChartType(type: string) {
      this.currentChartType = type
    },
    changeDataSource(dataSource: string) {
      this.currentDataSource = dataSource
    }
  }
});