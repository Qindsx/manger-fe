<script setup lang="ts">
import { ref, computed } from 'vue';
import Herder from '../components/layout/herder.vue';
import menuVue from '../components/layout/menu.vue';
import { useSidebarStore } from '../store';

const sidebarStore = useSidebarStore();
const asideWidth = computed(() => (!sidebarStore.collapse ? '225px' : '55px'));
</script>
<template>
  <div class="flex h-full">
    <el-container class="flex-1">
      <el-header
        class="bg-[rgb(36,47,66)] text-white flex justify-between items-center"
      >
        <herder />
      </el-header>
      <el-container
        ><el-aside class="bg-slate-800" :width="asideWidth">
          <menuVue />
        </el-aside>
        <el-main class="bg-[#f5f7f9] flex-1">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
