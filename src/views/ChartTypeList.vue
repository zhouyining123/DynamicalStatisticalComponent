<template>
  <div class="chart-type-list chart-type-list-row">
    <div class="icon-row">
      <el-tooltip
        v-for="(icon, idx) in chartIcons"
        :key="icon.key"
        :content="icon.name"
        :show-after="300"
        placement="top"
      >
        <div
          class="icon-item"
          :class="{ selected: idx === selectedIndex }"
          @click="selectIcon(icon.key, idx)"
          @mouseenter="handleHover(idx)"
        >
          <img :src="icon.src" :alt="icon.name" />
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { chartTypeIcons } from '../config'
import { useWorkbenchStore } from '../store'

// 获取当前图表类型
const workbenchStore = useWorkbenchStore()
const currentChartType = ref(workbenchStore.currentChartType)

// 获取所有图表icon
const chartIcons = chartTypeIcons
const selectedIndex = ref(1)

function selectIcon(key: string, idx: number) {
  selectedIndex.value = idx
  workbenchStore.currentChartType = currentChartType.value = key
}

// 鼠标划过音效集成
const audio = new Audio(new URL('../assets/video/1.mp3', import.meta.url).href)
audio.load()
audio.addEventListener('canplaythrough', () => {
  // 预加载完成，可以播放
})
let lastPlay = 0
let lastIdx = -1
function handleHover(idx: number) {
  const now = Date.now()
  // 只有切换到新图标或超过200ms才播放
  if (idx !== lastIdx || now - lastPlay > 200) {
    try {
      audio.currentTime = 0
      audio.play()
    } catch (e) {
    }
    lastPlay = now
    lastIdx = idx
  }
}
</script>

<style scoped>
.chart-type-list-row {
  background: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  width: auto;
  min-width: 0;
  height: 60px;
}
.icon-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  padding: 0 8px;
  scrollbar-width: thin;
  scrollbar-color: #d0d6e1 #fff;
  position: relative;
  z-index: 1;
  height: 60px;
}
.icon-row::-webkit-scrollbar {
  height: 6px;
  background: #fff;
}
.icon-row::-webkit-scrollbar-thumb {
  background: #d0d6e1;
  border-radius: 3px;
}
.icon-row::-webkit-scrollbar-corner {
  background: #fff;
}
.icon-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid transparent;
  background: none;
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s, transform 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
  position: relative;
  z-index: 1;
}
.icon-item.selected {
  border: 2px solid #4a8cff;
  background: #f5faff;
}
.icon-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px 0 rgba(80,120,255,0.18);
  z-index: 10;
}
.icon-item img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  pointer-events: none;
}
</style>