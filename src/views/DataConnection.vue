<template>
  <div class="data-connection-root">
    <el-header class="data-connection-header">
      <div class="header-title">数据连接管理</div>
    </el-header>
    <div class="data-connection-main">
      <div class="connection-list-container">
        <div class="list-header">
          <span>已存连接</span>
        </div>
        <div class="list-content">
          <el-card v-for="conn in connections" :key="conn.id" class="connection-card" shadow="hover">
            {{ conn.name }}
          </el-card>
        </div>
      </div>
      <div class="connection-form-container">
        <div class="form-header">新建 / 编辑连接</div>
        <div class="form-content">
          <el-form :model="form" label-position="top">
            <el-form-item label="连接名称">
              <el-input v-model="form.name" placeholder="例如：我的生产数据库" />
            </el-form-item>
            <el-form-item label="数据库类型">
              <el-select v-model="form.type" placeholder="请选择数据库类型" style="width: 100%">
                <el-option label="MySQL" value="mysql" />
                <el-option label="PostgreSQL" value="postgresql" />
                <el-option label="SQL Server" value="sqlserver" />
              </el-select>
            </el-form-item>
            <el-form-item label="主机地址">
              <el-input v-model="form.host" placeholder="例如：localhost 或 192.168.1.1" />
            </el-form-item>
            <el-form-item label="端口">
              <el-input v-model="form.port" placeholder="例如：3306" />
            </el-form-item>
            <el-form-item label="数据库名称">
              <el-input v-model="form.database" placeholder="要连接的特定数据库的名称" />
            </el-form-item>
            <el-form-item label="用户名">
              <el-input v-model="form.user" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" type="password" show-password />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="testConnection" :loading="isLoading">测试连接</el-button>
              <el-button>保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const isLoading = ref(false)

// 模拟已保存的连接列表
const connections = ref([
  { id: 1, name: '我的线上MySQL' },
  { id: 2, name: '测试环境Postgres' }
])

// 连接表单数据模型
const form = reactive({
  name: '',
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  database: '',
  user: 'root',
  password: ''
})

/**
 * 模拟后端API调用来测试数据库连接
 * @param data - 连接表单数据
 */
const mockApiTestConnection = (data: typeof form): Promise<{ success: boolean; message: string }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (data.password === '123456') {
        resolve({ success: true, message: '连接成功！' });
      } else {
        resolve({ success: false, message: '连接失败，密码不正确。' });
      }
    }, 1000); // 模拟1秒网络延迟
  });
}

const testConnection = async () => {
  isLoading.value = true;
  try {
    const res = await mockApiTestConnection(form);
    if (res.success) {
      ElMessage.success(res.message);
    } else {
      ElMessage.error(res.message);
    }
  } catch (error) {
    ElMessage.error('测试连接时发生未知错误。');
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped lang="scss">
.data-connection-root {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-page);
  display: flex;
  flex-direction: column;
}

.data-connection-header {
  height: 56px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 10;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  color: #222;
}

.data-connection-main {
  flex-grow: 1;
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow: hidden;
}

.connection-list-container,
.connection-form-container {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
}

.connection-list-container {
  width: 320px;
  flex-shrink: 0;
}

.connection-form-container {
  flex: 1;
  overflow-y: auto;
}

.list-header,
.form-header {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
}

.list-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.connection-card {
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    border-color: var(--el-color-primary);
  }
}

.form-content {
  flex-grow: 1;
  overflow-y: auto;
}

::v-deep(.el-form-item__label) {
  color: var(--gray-600);
}
</style> 