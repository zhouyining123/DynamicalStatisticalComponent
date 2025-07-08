<template>
  <div class="canvas-container">
    <el-header class="canvas-header">
      <div class="header-left">
        <el-input placeholder="未命名数据源" class="datasource-name-input"></el-input>
      </div>
      <div class="header-right">
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </el-header>
    <div class="canvas-main">
      <div class="tables-panel">
        <div class="panel-header">
          <el-select
            v-model="selectedConnection"
            placeholder="请选择数据库连接"
            style="width: 100%"
            @change="onConnectionChange"
          >
            <el-option
              v-for="item in dbConnections"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </div>
        <div class="panel-content">
          <VueDraggableNext
            v-model="sourceTables"
            :group="{ name: 'tables', pull: 'clone', put: false }"
            :sort="false"
            class="draggable-area"
          >
            <div v-for="table in sourceTables" :key="table.id" class="table-item">
              {{ table.name }}
            </div>
          </VueDraggableNext>
        </div>
      </div>
      <div class="diagram-panel">
        <div class="panel-header">关系图</div>
        <div class="panel-content">
          <VueDraggableNext
            v-model="canvasTables"
            group="tables"
            class="draggable-area canvas-area"
          >
            <div v-for="table in canvasTables" :key="table.id" class="table-item-on-canvas">
              {{ table.name }}
            </div>
          </VueDraggableNext>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

interface Table {
  id: number;
  name: string;
}

// Mock data for database connections
const dbConnections = ref([
  { id: 1, name: '我的线上MySQL' },
  { id: 2, name: '测试环境Postgres' }
])
const selectedConnection = ref<number | null>(null)

// Mock data for tables per connection
const allTables: Record<number, Table[]> = {
  1: [ // Corresponds to '我的线上MySQL'
    { id: 1, name: '用户信息表' },
    { id: 2, name: '订单表' },
    { id: 3, name: '商品信息表' },
    { id: 4, name: '商家表' },
  ],
  2: [ // Corresponds to '测试环境Postgres'
    { id: 101, name: 'employees' },
    { id: 102, name: 'departments' },
    { id: 103, name: 'salaries' },
  ]
}

// Source tables to display based on selected connection
const sourceTables = ref<Table[]>([]);

// Tables that are dragged onto the canvas
const canvasTables = ref<Table[]>([]);

const onConnectionChange = (connectionId: number) => {
  sourceTables.value = allTables[connectionId] || [];
}
</script>

<style scoped lang="scss">
.canvas-container {
  height: 100vh;
  width: 100%;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
}

.canvas-header {
  height: 56px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 10;
  flex-shrink: 0;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.datasource-name-input {
  width: 300px;
}

.canvas-main {
  flex-grow: 1;
  display: flex;
  padding: 16px;
  gap: 16px;
  overflow: hidden;
}

.tables-panel, .diagram-panel {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  flex-direction: column;
}

.tables-panel {
  width: 280px;
  flex-shrink: 0;
}

.diagram-panel {
  flex-grow: 1;
}

.panel-header {
  padding: 16px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
}

.panel-content {
  padding: 8px;
  flex-grow: 1;
  overflow-y: auto;
}

.draggable-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.canvas-area {
  flex-flow: row wrap;
  align-content: flex-start;
}

.table-item {
  padding: 10px 12px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  cursor: grab;
  text-align: center;
  font-size: 14px;
  &:hover {
    background-color: #e9ecef;
  }
}

.table-item-on-canvas {
  padding: 16px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.05);
  margin: 8px;
  width: 180px;
  // height is auto
}
</style> 