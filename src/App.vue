<template>
  <router-view />
</template>

<script setup lang="ts">
// 仅作为路由出口
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.dark {
  background: #222;
  color: #fff;
}
</style>
