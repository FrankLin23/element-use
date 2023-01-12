import { constantRoutes } from '@/router';
import { defineStore } from 'pinia';

export const permissionStore = defineStore('permission', () => {
  const accessRoutes = constantRoutes;

  return { accessRoutes };
});
