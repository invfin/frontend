<script lang="ts" setup>
import Motion from "./utils/motion";
import { useNav } from "@/layout/hooks/useNav";
import { useLayout } from "@/layout/hooks/useLayout";
import { bg, illustration } from "./utils/static";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import dayIcon from "@/assets/svg/day.svg?component";
import darkIcon from "@/assets/svg/dark.svg?component";

defineOptions({
  name: "Register"
});

const { initStorage } = useLayout();
initStorage();

const { dataTheme, dataThemeChange } = useDataThemeChange();
dataThemeChange();
const { title } = useNav();
</script>
<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <el-switch
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <div class="img">
        <img :src="illustration" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <!--  Broken
          <avatar class="avatar" />
          -->
          <Motion>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
