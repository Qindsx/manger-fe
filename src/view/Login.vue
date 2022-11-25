<script setup lang="ts">
import { userRepository } from '../service';
import { FormRules, FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/';

const router = useRouter();
const formData = reactive({
  username: 'admin',
  password: '123456',
});

const loginRef = ref<FormInstance>();

const useStore = useUserStore();
const onLogin = async (loginRef: FormInstance | undefined) => {
  if (!loginRef) return;
  await loginRef.validate(async (valid, fields) => {
    if (valid) {
      const res = await userRepository.login(formData);
      useStore.saveUeerInfo(res.data);
      router.push('/home');
    }
  });
};   

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
</script>

<template>
  <div class="login-wrapper h-full flex justify-center items-center">
    <div class="modal w-3/12 shadow-md p-2 bg-slate-50">
      <div class="title subpixel-antialiased text-2xl text-center m-3">
        账号登录
      </div>
      <el-form
        :model="formData"
        status-icon
        ref="loginRef"
        :rules="rules"
        class="demo-form-inline"
        label-width="85px"
      >
        <el-form-item label="用户名:" prop="username">
          <!-- <template #prepend>
            <el-button :icon="User" />
          </template> -->
          <el-input v-model="formData.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input
            type="password"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div class="flex justify-center">
          <el-button type="primary" @click="onLogin(loginRef)">确认</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<style scoped></style>
