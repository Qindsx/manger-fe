<script setup lang="ts"></script>
<template>
  <div class=" flex h-full">
    <el-container class=" flex-1">
      <el-aside background-color="#304156" class=" bg-slate-800" width="225px">Aside</el-aside>
      <el-container>
        <el-header class=" bg-white">Header</el-header>
        <el-main class=" bg-[#f5f7f9] flex-1">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
