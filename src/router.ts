import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import Workbench from './views/Workbench.vue'
import ChartTypeList from './views/ChartTypeList.vue'
import DataSourceList from './views/IndicatorList.vue'
import IndicatorManage from './views/IndicatorManage.vue'
import DataConnection from './views/DataConnection.vue'
import DataSourceCanvas from './views/DataSourceCanvas.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    redirect: '/workbench',
    children: [
      {
        path: 'workbench',
        name: 'Workbench',
        component: Workbench
      },
      {
        path: 'indicator-manage',
        name: 'IndicatorManage',
        component: IndicatorManage
      },
      {
        path: 'data-connection',
        name: 'DataConnection',
        component: DataConnection
      },
      {
        path: 'data-source-canvas',
        name: 'DataSourceCanvas',
        component: DataSourceCanvas
      }
    ]
  },
  {
    path: '/chart-type-list',
    name: 'ChartTypeList',
    component: ChartTypeList
  },
  {
    path: '/data-source-list',
    name: 'DataSourceList',
    component: DataSourceList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 