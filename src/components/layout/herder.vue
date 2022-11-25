<script setup lang="ts">
import { Operation, Bell } from '@element-plus/icons-vue';

const onOpenMenu = ()=>{
  
}
</script>

<template>
  <div class="flex">
    <el-icon @click="onOpenMenu" class="items-center" size="25">
      <Operation />
    </el-icon>
    <!-- <i class="el-icon-edit"></i> -->
    <div class="text-lg ml-2">面包屑</div>
  </div>
  <div class="flex justify-center items-center">
    <el-tooltip
      class="box-item"
      effect="dark"
      content="Bottom Center prompts info"
      placement="bottom"
    >
      <div class="">
        <el-icon size="25" class="mt-2">
          <Bell />
        </el-icon>
        <span
          class="bg-red-500 w-2 h-2 block rounded-[50%] relative left-[21px] bottom-[34px]"
        ></span>
      </div>
    </el-tooltip>
    <!-- <el-image
            style="width: 25px; height: 25px"
            src="../assets/img/tian.jpg"
          /> -->
    <div class="flex justify-center items-center ml-4 mr-2">
      <img
        class="block rounded-[50%]"
        style="width: 35px; height: 35px"
        src="../../assets/img/tian.jpg"
      />
      <el-dropdown class="text-center ml-2">
        <span class="el-dropdown-link text-white"> admin </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped></style>
