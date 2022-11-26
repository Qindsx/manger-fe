<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../../store';
import { Setting, Document } from '@element-plus/icons-vue';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const sidebarStore = useSidebarStore();
const isCollapse = computed(() => sidebarStore.collapse);
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo border-r"
    :collapse="isCollapse"
    :collapse-transition="false"
    @open="handleOpen"
    @close="handleClose"
    background-color="#324157"
    text-color="#bfcbd9"
    active-text-color="#20a0ff"
  >
    <el-sub-menu index="1">
      <template #title
        ><el-icon>
          <Setting />
        </el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title
        ><el-icon>
          <Document />
        </el-icon>
        <span>审批管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">休假申请</el-menu-item>
        <el-menu-item index="2-2">待我审批</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<style scoped></style>
