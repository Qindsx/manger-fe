<script setup lang="ts">
import { Operation, Bell } from '@element-plus/icons-vue';
import { useSidebarStore, useUserStore } from '../../store';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';

const sidebarStore = useSidebarStore();
const onOpenMenu = () => {
  sidebarStore.handleCollapse();
};

const router = useRouter();
const onQuit = () => {
  ElMessageBox.confirm('确认退出登录吗？', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '退出成功',
      });
      router.push('/login');
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出',
      });
    });
};
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
            <el-dropdown-item @click="onQuit" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped></style>
