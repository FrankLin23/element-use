<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const activeMenu = computed(() => '1');
</script>

<template>
  <el-scrollbar>
    <el-menu
      :router="true"
      :default-active="activeMenu"
      :unique-opened="false"
      text-color="#fff"
      active-text-color="#eee"
    >
    </el-menu>
  </el-scrollbar>
</template>

<style scoped></style>
