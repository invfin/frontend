<script setup lang="ts">
import LogoutCircleRLine from "@iconify-icons/ri/logout-circle-r-line";
import { useUserStoreHook } from "@/store/modules/user";

const logout = useUserStoreHook().logOut;
const user = useUserStoreHook().user;
const register = useUserStoreHook().redirectRegister;
</script>

<template>
  <template v-if="user.isLoggedIn">
    <el-dropdown-menu class="logout">
      <el-dropdown-item @click="logout">
        <IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
        Salir
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
  <template v-else>
    <el-dropdown-menu class="logout">
      <el-dropdown-item @click="register">
        <IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
        Registrarse
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
</template>

<style lang="scss" scoped>
.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
