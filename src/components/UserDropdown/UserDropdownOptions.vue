<script setup lang="ts">
import LogoutCircleRLine from "@iconify-icons/ri/logout-circle-r-line";
</script>

<template>
  <el-dropdown-menu class="logout">
    <el-dropdown-item @click="logout">
      <IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
      Salir
    </el-dropdown-item>
  </el-dropdown-menu>
</template>
