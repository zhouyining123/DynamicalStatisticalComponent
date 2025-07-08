// 全局类型定义入口，可在此文件导入和扩展项目相关类型 

import type { Component } from 'vue'

export interface ChartTypeIcon {
  key: string;
  name: string;
  src: string;
} 

export type IndicatorType = '设备' | '建筑物' | '日常值班' | '日常巡检';

export interface Indicator {
  index: number;
  name: string;
  desc: string;
  enabled: boolean;
  dataSource?: string; // 可选
}

export interface Dimension {
  key: string;
  name: string;
  desc: string;
  dataSource?: string;
}

export interface DataSource {
  name: string;
  key: string;
  table: Array<string>;
}

export interface DataConfigItem {
  name: string;
  key: string;
  component: Component;
  required: boolean;
  multiple: boolean;
}

export interface ChartTypeData {
  DataConfigItems: DataConfigItem[];
}

export interface ChartTypeDataConfig {
  [key: string]: ChartTypeData;
}