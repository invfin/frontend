<script setup lang="ts">
import Motion from "./utils/motion";
import { useRouter } from "vue-router";
import { message } from "@/utils/message";
import { loginRules } from "./utils/rule";
import { initRouter } from "@/router/utils";
import type { FormInstance } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { ref, reactive } from "vue";
import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";

const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();

const { initStorage } = useLayout();
initStorage();

const ruleForm = reactive({
  username: "admin",
  password: "admin123"
});

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      useUserStoreHook()
        .logIn({
          username: ruleForm.username,
          password: ruleForm.password
        })
        .then(res => {
          if (res.success) {
            initRouter().then(() => {
              router.push("/");
              message("Binvenido", { type: "success" });
            });
          }
        });
    } else {
      loading.value = false;
      return fields;
    }
  });
};
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
    <Motion :delay="100">
      <el-form-item
        :rules="[
          {
            required: true,
            message: 'Este campo es obligatorio',
            trigger: 'blur'
          }
        ]"
        prop="username"
      >
        <el-input
          clearable
          v-model="ruleForm.username"
          placeholder="Nombre de usuario"
          :prefix-icon="useRenderIcon(User)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="150">
      <el-form-item prop="password">
        <el-input
          clearable
          show-password
          v-model="ruleForm.password"
          placeholder="Contraseña"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <el-button
        class="w-full mt-4"
        size="default"
        type="success"
        :loading="loading"
        @click="onLogin(ruleFormRef)"
      >
        Ingresar
      </el-button>
    </Motion>
    <Motion :delay="250">
      <el-button
        class="w-full mt-4"
        size="default"
        type="primary"
        :loading="loading"
        @click="$router.push('register')"
      >
        Registrarse
      </el-button>
    </Motion>
  </el-form>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
