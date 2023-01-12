<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <el-container class="app-wrapper">
    <el-header class="app-header">
      <Navbar />
    </el-header>
    <el-container class="app-main-wrapper">
      <el-aside width="200px"></el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
  .app-wrapper {
    width: 100%;
    height: 100%;
    .app-header {
      background-color: aqua;
      padding: 0;
    }
  }
</style>
