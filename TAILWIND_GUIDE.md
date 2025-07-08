# Tailwind CSS 使用指南

## 项目配置

项目已成功配置 Tailwind CSS，包括：

### 1. 安装的依赖
- `tailwindcss`: Tailwind CSS 核心框架
- `postcss`: CSS 后处理器
- `autoprefixer`: 自动添加浏览器前缀

### 2. 配置文件
- `tailwind.config.js`: Tailwind 配置文件
- `postcss.config.js`: PostCSS 配置文件
- `src/style/index.css`: 全局样式文件（已引入 Tailwind）

## 自定义配置

### 颜色系统
项目扩展了 Tailwind 的颜色系统：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 更多色阶
    900: '#0c4a6e',
  },
  gray: {
    50: '#f9fafb',
    // ... 更多色阶
    900: '#111827',
  }
}
```

### 动画系统
自定义动画效果：

```javascript
animation: {
  'fade-in': 'fadeIn 0.3s ease-in-out',
  'slide-in': 'slideIn 0.3s ease-out',
  'scale-in': 'scaleIn 0.2s ease-out',
}
```

### 缓动函数
自定义过渡缓动：

```javascript
transitionTimingFunction: {
  'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
}
```

## 使用示例

### 1. 布局类
```html
<!-- 容器 -->
<div class="h-screen w-full bg-gray-50 overflow-hidden">
  
<!-- Flexbox 布局 -->
<div class="flex items-center justify-between px-6">
  
<!-- Grid 布局 -->
<div class="grid grid-cols-3 gap-4">
```

### 2. 间距类
```html
<!-- 内边距 -->
<div class="p-4 px-6 py-2">
  
<!-- 外边距 -->
<div class="m-2 mt-4 mb-2 ml-6 mr-4">
  
<!-- 间距 -->
<div class="space-y-4 space-x-2">
```

### 3. 颜色类
```html
<!-- 背景色 -->
<div class="bg-white bg-gray-100 bg-primary-500">
  
<!-- 文字颜色 -->
<span class="text-gray-800 text-primary-600 text-white">
  
<!-- 边框颜色 -->
<div class="border border-gray-200 border-primary-300">
```

### 4. 尺寸类
```html
<!-- 宽度 -->
<div class="w-full w-64 w-1/2 w-auto">
  
<!-- 高度 -->
<div class="h-screen h-12 h-full h-auto">
  
<!-- 最小/最大尺寸 -->
<div class="min-h-80 max-w-md min-w-0">
```

### 5. 字体类
```html
<!-- 字体大小 -->
<h1 class="text-2xl text-lg text-sm">
  
<!-- 字体粗细 -->
<span class="font-bold font-semibold font-normal">
  
<!-- 文字对齐 -->
<p class="text-center text-left text-right">
```

### 6. 边框和圆角
```html
<!-- 边框 -->
<div class="border border-2 border-gray-200">
  
<!-- 圆角 -->
<div class="rounded rounded-md rounded-lg rounded-full">
  
<!-- 阴影 -->
<div class="shadow shadow-sm shadow-md shadow-lg">
```

### 7. 过渡和动画
```html
<!-- 过渡 -->
<div class="transition-all duration-300 ease-smooth">
  
<!-- 悬停效果 -->
<button class="hover:bg-gray-100 hover:scale-105">
  
<!-- 动画 -->
<div class="animate-fade-in animate-slide-in">
```

### 8. 响应式设计
```html
<!-- 响应式断点 -->
<div class="w-full md:w-1/2 lg:w-1/3">
  
<!-- 响应式显示/隐藏 -->
<div class="hidden md:block lg:hidden">
  
<!-- 响应式间距 -->
<div class="p-2 md:p-4 lg:p-6">
```

## 最佳实践

### 1. 类名组织
```html
<!-- 推荐：按功能分组 -->
<div class="
  flex items-center justify-between
  p-4 bg-white rounded-lg shadow-sm
  hover:shadow-md transition-shadow duration-200
">
```

### 2. 组件化
```html
<!-- 使用 @apply 指令创建组件类 -->
<style>
.btn-primary {
  @apply px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors;
}
</style>
```

### 3. 自定义工具类
```html
<!-- 在 tailwind.config.js 中扩展 -->
extend: {
  spacing: {
    '18': '4.5rem',
    '88': '22rem',
  }
}
```

## 与 Element Plus 集成

### 1. 覆盖 Element Plus 样式
```css
/* 使用 Tailwind 类覆盖 Element Plus 样式 */
.el-button {
  @apply bg-primary-500 border-primary-500 hover:bg-primary-600;
}
```

### 2. 混合使用
```html
<!-- Element Plus 组件 + Tailwind 类 -->
<el-button class="w-full mt-4 bg-primary-500">
  按钮
</el-button>
```

## 性能优化

### 1. PurgeCSS
Tailwind CSS 会自动移除未使用的样式，确保生产环境的 CSS 文件最小化。

### 2. 类名优化
- 避免过度使用工具类
- 合理使用组件化
- 利用 Tailwind 的响应式功能

## 开发工具

### 1. VS Code 扩展
- Tailwind CSS IntelliSense
- PostCSS Language Support

### 2. 浏览器扩展
- Tailwind CSS Debug Screens

## 常见问题

### 1. 样式不生效
- 检查 `content` 配置是否正确
- 确认文件路径在扫描范围内
- 重启开发服务器

### 2. 自定义样式冲突
- 使用 `!important` 或提高选择器优先级
- 利用 Tailwind 的 `@layer` 指令

### 3. 性能问题
- 避免在循环中动态生成类名
- 合理使用组件化减少重复代码 