<script setup lang="ts">
import Search from "@/components/search/index.vue";
import Notifications from "@/components/notifications/index.vue";

import { useNav } from "@/layout/hooks/useNav";
import topCollapse from "./sidebar/topCollapse.vue";
import UserDropdown from "@/components/UserDropdown/UserDropdown.vue";

const { pureApp, avatarsStyle, toggleSideBar } = useNav();
</script>

<template>
  <div
    class="navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"
  >
    <topCollapse
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <div class="vertical-header-right">
      <Search />
      <Notifications id="header-notice" />
      <UserDropdown :avatarsStyle="avatarsStyle" />
      <!-- <span
        class="set-icon navbar-bg-hover"
        title=""
        @click="onPanel"
      >
        <IconifyIconOffline :icon="Setting" />
      </span> -->
    </div>
  </div>
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
</style>
