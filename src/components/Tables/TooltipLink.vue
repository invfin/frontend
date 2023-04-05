<script lang="ts" setup>
import question from "@iconify-icons/ep/question-filled";

const props = defineProps<{
  rowInformation: any;
}>();
</script>

<template>
  <el-popover effect="light" trigger="hover" placement="top" width="auto">
    <template #default>
      <a :href="`/${props.rowInformation.link}/`" target="_blank">
        {{ props.rowInformation.fields }}
      </a>
    </template>
    <template #reference>
      <el-icon><IconifyIconOffline :icon="question" /></el-icon>
    </template>
  </el-popover>
</template>
