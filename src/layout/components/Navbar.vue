<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/vue.svg" alt="logo" />
      <div class="logo-title">Element Use</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.28);
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 20px;
        margin-bottom: 3px;
      }
    }
    .logo-title {
      font-size: 14px;
    }
  }
</style>
