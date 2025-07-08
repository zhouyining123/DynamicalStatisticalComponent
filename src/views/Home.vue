<template>
  <el-container class="home-container">
    <el-aside class="aside-menu" :class="isCollapse ? 'collapsed': 'expanded'">
      <div class="flex collapse-btn" @click="toggleCollapse">
        <el-icon size="1.5em" color="#fff">
          <component :is="iconMap[isCollapse ? 'Expand' : 'Fold']" />
        </el-icon>
      </div>
      <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
        router
        :collapse="isCollapse"
      >
        <el-menu-item index="/workbench">
          <WorkbenchIcon class="menu-icon" />
          <template #title>
            <span class="menu-text" :class="{ collapsed: isCollapse }">&nbsp;&nbsp;工作台</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/indicator-manage">
          <IndicatorIcon class="menu-icon" />
          <template #title>
            <span class="menu-text" :class="{ collapsed: isCollapse }">&nbsp;&nbsp;指标管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/data-connection">
          <DatabaseIcon class="menu-icon" />
          <template #title>
            <span class="menu-text" :class="{ collapsed: isCollapse }">&nbsp;&nbsp;数据连接</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/data-source-canvas">
          <DatasourceIcon class="menu-icon" />
          <template #title>
            <span class="menu-text" :class="{ collapsed: isCollapse }">&nbsp;&nbsp;数据源配置</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Fold, Expand } from '@element-plus/icons-vue';
import WorkbenchIcon from '@/assets/icon/modulesIcons/workbench.svg?component';
import IndicatorIcon from '@/assets/icon/modulesIcons/indicator.svg?component';
import DatabaseIcon from '@/assets/icon/modulesIcons/database.svg?component';
import DatasourceIcon from '@/assets/icon/modulesIcons/datasource.svg?component';

const iconMap = { Fold, Expand };
const route = useRoute();
const isCollapse = ref(false);

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  width: 100vw;
}
.collapsed {
  width: 64px;
}
.expanded {
  width: 200px;
}
.aside-menu {
  background-color: #222;
  border-right: 1px solid #222;
  position: relative;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.collapse-btn {
  height: 48px;
  /* display: flex; */
  align-items: center;
  justify-content: flex-end;
  padding: 0 18px;
  cursor: pointer;
  user-select: none;
  background: #222;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.collapse-btn:hover {
  background: #333;
  transform: scale(1.05);
}
.el-menu-vertical-demo {
  height: calc(100vh - 48px);
  border-right: none;
  background: #222;
  color: #fff;
}
.el-menu-vertical-demo .el-menu-item {
  color: #fff;
}
.el-menu-vertical-demo .el-menu-item.is-active,
.el-menu-vertical-demo .el-menu-item:hover {
  background: #333 !important;
  color: #4a8cff !important;
}
.menu-icon {
  width: 20px;
  height: 20px;
  display: block;
  object-fit: contain;
  filter: none !important;
  color: #fff;
  margin: 0 auto;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.el-menu-item:hover .menu-icon {
  transform: scale(1.1);
}
.el-main {
  padding: 0;
  background-color: #f0f2f5;
}
.el-menu .el-icon,
.menu-icon {
  color: #fff !important;
  filter: none !important;
}
.logo-container {
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  background: #222;
}
.logo-icon {
  width: 24px;
  height: 24px;
}
.logo-text {
  margin-left: 12px;
  font-size: 16px;
  font-weight: bold;
}
.menu-text {
  display: inline-block;
  max-width: 150px;
  opacity: 1;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 135px;
  text-align: start;
  transform: translateX(0);
}
.menu-text.collapsed {
  max-width: 0;
  opacity: 0;
  margin-left: 0;
  transform: translateX(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 