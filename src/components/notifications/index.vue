<script setup lang="ts">
import { ref, onMounted } from "vue";
import NoticeList from "./noticeList.vue";
import Bell from "@iconify-icons/ep/bell";
import { http } from "@/utils/http";
import { NotificationsResponse } from "./types";
import { useUserStoreHook } from "@/store/modules/user";

const noticesNum = ref(0);
const notifications = ref([]);
const activeKey = ref(0);

function getNotifications() {
  if (useUserStoreHook().user.isLoggedIn) {
    const response = http.request<NotificationsResponse>(
      "get",
      "/notifications",
      {}
    );
    response
      .then(data => {
        activeKey.value = data.data[0].key;
        notifications.value = data.data;
        notifications.value.map(v => (noticesNum.value += v.list.length));
      })
      .catch(err => {
        console.error(err);
      });
  }
}

onMounted(() => {
  getNotifications();
});
</script>

<template>
  <el-dropdown trigger="click" placement="bottom-end">
    <span class="dropdown-badge navbar-bg-hover select-none">
      <el-badge :value="noticesNum" :max="99">
        <span class="header-notice-icon">
          <IconifyIconOffline :icon="Bell" />
        </span>
      </el-badge>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-tabs :stretch="true" v-model="activeKey" class="dropdown-tabs">
          <template
            v-for="notification in notifications"
            :key="notification.key"
          >
            <el-tab-pane
              :label="`${notification.name}(${notification.list.length})`"
              :name="`${notification.key}`"
            >
              <el-scrollbar max-height="330px">
                <div class="noticeList-container">
                  <NoticeList :list="notification.list" />
                </div>
              </el-scrollbar>
            </el-tab-pane>
          </template>
        </el-tabs>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.dropdown-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 60px;
  cursor: pointer;

  .header-notice-icon {
    font-size: 18px;
  }
}

.dropdown-tabs {
  width: 330px;

  .noticeList-container {
    padding: 15px 24px 0 24px;
  }

  :deep(.el-tabs__header) {
    margin: 0;
  }

  :deep(.el-tabs__nav-wrap)::after {
    height: 1px;
  }

  :deep(.el-tabs__nav-wrap) {
    padding: 0 36px 0 36px;
  }
}
</style>
