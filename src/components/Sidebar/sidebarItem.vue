<script setup lang="ts">
  import { useSettingStore } from '@/store/modules/settings';
  import { computed, ref } from 'vue';

  interface childType {
    path: string;
    name?: string;
    component: Function;
    meta: {
      title: Object;
      icon: string;
      hidden?: boolean;
      [key: string]: any;
    };
  }

  defineProps({
    item: {
      type: Object,
      required: true,
    },
    isNested: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  });

  const onlyOneChild = ref();
  const store = useSettingStore();
  const lang = computed(() => store.getLangState);

  const hasOneShowingChild = (children: childType[] = [], parent: any) => {
    const showingChildren = children.filter((item) => {
      if (item?.meta?.hidden) {
        return false;
      }
    });
    if (showingChildren.length === 1) {
      return true;
    }
    if (showingChildren.length === 0) {
      onlyOneChild.value = { ...parent, noShowingChildren: true };
      return true;
    }
    return false;
  };
</script>

<template>
  <div v-if="!item.meta.hidden" class="sidebar-item">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item
        :key="onlyOneChild.path"
        :index="onlyOneChild.path"
        :route="onlyOneChild.path"
      >
        <i :class="onlyOneChild.meta.icon" />
        <template #title> {{ onlyOneChild.meta.title[lang] }} </template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template #title>
        <i :data-index="item.path" :class="item.meta.icon" />
        <span>{{ item.meta.title[lang] }}</span>
      </template>
      <sidebarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nested="true"
        :item="child"
        :base-path="child.path"
      />
    </el-sub-menu>
  </div>
</template>

<style scoped></style>
