import { defineStore } from 'pinia';
import { SidebarState } from '../types';
import Cookies from 'js-cookie';
import { computed } from 'vue';

export const useSettingStore = defineStore('setting', () => {
  const sidebar: SidebarState = {
    opened: Cookies.get('sidebarStatus')
      ? !!Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  };

  const device = 'desktop';

  const lang = '/zh-CN';

  const getLangState = computed(() => lang);

  return { sidebar, device, lang, getLangState };
});
