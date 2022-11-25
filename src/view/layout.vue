<script setup lang="ts">
import herader from '../components/layout/herder.vue';
import { ref } from 'vue';
import Herder from '../components/layout/herder.vue';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const isCollapse = ref(false);
</script>
<template>
  <div class="flex h-full">
    <el-container class="flex-1">
      <el-header
        class="bg-[rgb(36,47,66)] text-white flex justify-between items-center"
      >
      <herder/>
      </el-header>
      <el-container
        ><el-aside class="bg-slate-800" width="225px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo border-r"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <icon-menu />
              </el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document />
              </el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="bg-[#f5f7f9] flex-1">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
</style>
