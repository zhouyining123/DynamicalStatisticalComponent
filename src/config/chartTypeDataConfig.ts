import type { ChartTypeDataConfig } from '../types'
import XaxisConfiguration from '../views/ChartDataConfig/components/XaxisConfiguration.vue'
import YaxisConfiguration from '../views/ChartDataConfig/components/YaxisConfiguration.vue'
import GroupConfiguration from '../views/ChartDataConfig/components/GroupConfiguration.vue'
import FilterConfiguration from '../views/ChartDataConfig/components/FilterConfiguration.vue'
import SourceConfiguration from '../views/ChartDataConfig/components/SourceConfiguration.vue'

export const chartTypeDataConfig: ChartTypeDataConfig = {
  // 柱状图
  bar: {
    DataConfigItems: [
      { name: '数据源', key: 'SourceConfiguration',component: SourceConfiguration, required: true, multiple: false },
      { name: 'X轴配置', key: 'XaxisConfiguration',component: XaxisConfiguration, required: true, multiple: false },
      { name: 'Y轴配置', key: 'YaxisConfiguration',component: YaxisConfiguration, required: true, multiple: true },
      { name: '分组条件', key: 'GroupConfiguration',component: GroupConfiguration, required: false, multiple: false },
      { name: '筛选条件', key: 'FilterConfiguration',component: FilterConfiguration, required: false, multiple: false }
    ]
  },
  // 折线图
  line: {
    DataConfigItems: [
      { name: '数据源', key: 'SourceConfiguration',component: SourceConfiguration, required: true, multiple: false },
      { name: 'X轴配置', key: 'XaxisConfiguration',component: XaxisConfiguration, required: true, multiple: false },
      { name: 'Y轴配置', key: 'YaxisConfiguration',component: YaxisConfiguration, required: true, multiple: true },
      { name: '分组条件', key: 'GroupConfiguration',component: GroupConfiguration, required: false, multiple: false },
      { name: '筛选条件', key: 'FilterConfiguration',component: FilterConfiguration, required: false, multiple: false }
    ]
  },
  // 饼图
  pie: {
    DataConfigItems: [
      { name: '数据源', key: 'SourceConfiguration',component: SourceConfiguration, required: true, multiple: false },
      { name: 'X轴配置', key: 'XaxisConfiguration',component: XaxisConfiguration, required: true, multiple: false },
      { name: 'Y轴配置', key: 'YaxisConfiguration',component: YaxisConfiguration, required: true, multiple: true },
      { name: '分组条件', key: 'GroupConfiguration',component: GroupConfiguration, required: false, multiple: false },
      { name: '筛选条件', key: 'FilterConfiguration',component: FilterConfiguration, required: false, multiple: false }
    ]
  },
  // 表格
  // biaoge: {
  //   DataConfigItems: [
  //     { name: '行', key: 'row', required: true, multiple: true },
  //     { name: '列', key: 'column', required: true, multiple: true },
  //   ]
  // },
  
  // 堆积柱状图
  // duijizhuxingtu: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: false },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: true },
  //     { name: '分组', key: 'group', required: true, multiple: false },
  //   ]
  // },
  // 条形图
  // tiaoxingtu: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: true },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: false },
  //     { name: '分组', key: 'group', required: false, multiple: false },
  //   ]
  // },
  // 堆积条形图
  // duijitiaoxingtu: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: true },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: false },
  //     { name: '分组', key: 'group', required: true, multiple: false },
  //   ]
  // },
  // 折线图
  // line: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: false },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: true },
  //     { name: '分组', key: 'group', required: false, multiple: true },
  //   ]
  // },
  // 面积图
  // mianjitu: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: false },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: true },
  //     { name: '分组', key: 'group', required: false, multiple: true },
  //   ]
  // },

  // 环状图
  // huanzhuangtu: {
  //   DataConfigItems: [
  //     { name: '维度', key: 'dimension', required: true, multiple: false },
  //     { name: '指标', key: 'metric', required: true, multiple: false },
  //   ]
  // },
  // 玫瑰图
  // meiguitu: {
  //   DataConfigItems: [
  //     { name: '维度', key: 'dimension', required: true, multiple: false },
  //     { name: '指标', key: 'metric', required: true, multiple: false },
  //   ]
  // },
  // 漏斗图
  // funnel: {
  //   DataConfigItems: [
  //     { name: '转化层级', key: 'level', required: true, multiple: true },
  //     { name: '转化数值', key: 'value', required: true, multiple: false },
  //   ]
  // },
  // 散点图
  // sandiantu: {
  //   DataConfigItems: [
  //     { name: 'X轴', key: 'xAxis', required: true, multiple: false },
  //     { name: 'Y轴', key: 'yAxis', required: true, multiple: false },
  //     { name: '分组', key: 'group', required: false, multiple: false },
  //     { name: '气泡大小', key: 'size', required: false, multiple: false },
  //   ]
  // },
  // 雷达图
  // leidatu: {
  //   DataConfigItems: [
  //     { name: '维度', key: 'dimension', required: true, multiple: true },
  //     { name: '指标', key: 'metric', required: true, multiple: true },
  //   ]
  // },
  // 指标卡
  // zhibiaoka: {
  //   DataConfigItems: [
  //     { name: '指标', key: 'metric', required: true, multiple: true },
  //   ]
  // },
  // 仪表盘
  // gauge: { 
  //   DataConfigItems: [
  //     { name: '指标', key: 'metric', required: true, multiple: false }
  //   ] 
  // },
  // 其他图表使用通用配置
  // juxingshuzhuangtu: { DataConfigItems: [{ name: '维度', key: 'dimension', required: true, multiple: true }, { name: '指标', key: 'metric', required: true, multiple: false }] },
  // shuzhuangtu: { DataConfigItems: [{ name: '维度', key: 'dimension', required: true, multiple: true }, { name: '指标', key: 'metric', required: true, multiple: false }] },
  // fanweitiaoxingtu: { DataConfigItems: [{ name: 'X轴', key: 'xAxis', required: true, multiple: true }, { name: 'Y轴', key: 'yAxis', required: true, multiple: false }] },
  // qipaotu: { DataConfigItems: [{ name: 'X轴', key: 'xAxis', required: true, multiple: false }, { name: 'Y轴', key: 'yAxis', required: true, multiple: false }, { name: '气泡大小', key: 'size', required: false, multiple: false }] },
  // relitu: { DataConfigItems: [{ name: 'X轴', key: 'xAxis', required: true, multiple: false }, { name: 'Y轴', key: 'yAxis', required: true, multiple: false }, { name: '热力值', key: 'value', required: true, multiple: false }] },
  // xiangxingtu: { DataConfigItems: [{ name: 'X轴', key: 'xAxis', required: true, multiple: false }, { name: 'Y轴', key: 'yAxis', required: true, multiple: false }] },
  // wangzhuangtu: { DataConfigItems: [{ name: '维度', key: 'dimension', required: true, multiple: true }, { name: '指标', key: 'metric', required: true, multiple: true }] },
  // xuanfengtu: { DataConfigItems: [{ name: '维度', key: 'dimension', required: true, multiple: false }, { name: '左侧指标', key: 'leftMetric', required: true, multiple: true }, { name: '右侧指标', key: 'rightMetric', required: true, multiple: true }] },
  
  // fuwenben: { DataConfigItems: [] },
  // jizuobiao: { DataConfigItems: [{ name: '角度', key: 'angle', required: true, multiple: false }, { name: '半径', key: 'radius', required: true, multiple: false }] },
}