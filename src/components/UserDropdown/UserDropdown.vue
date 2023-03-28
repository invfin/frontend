<script setup lang="ts">
import UserDropdownOptions from "./UserDropdownOptions.vue";
import { useUserStoreHook } from "@/store/modules/user";

defineProps<{
  avatarsStyle?: Object;
}>();

const user = useUserStoreHook().user;
console.log(user);
</script>

<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link navbar-bg-hover select-none">
      <img :src="user.image" :style="avatarsStyle" />
      <p class="dark:text-white">{{ user.username }}</p>
    </span>
    <template #dropdown>
      <UserDropdownOptions />
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 48px;
  overflow: hidden;

  .hamburger-container {
    line-height: 48px;
    height: 100%;
    float: left;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    min-width: 280px;
    height: 48px;
    align-items: center;
    color: #000000d9;
    justify-content: flex-end;

    .el-dropdown-link {
      height: 48px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      color: #000000d9;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }

  .breadcrumb-container {
    float: left;
    margin-left: 16px;
  }
}

.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
