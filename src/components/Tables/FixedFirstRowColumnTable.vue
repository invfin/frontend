<script lang="ts" setup>
import { generateDataAndColumns } from "@/components/Tables/utils";

const props = defineProps<{
  tableInformation: any;
}>();
const [data, columns] = generateDataAndColumns(props.tableInformation);
</script>

<template>
  <div class="item-card">
    <el-table-v2 :columns="columns" :data="data" :width="700" :height="400" />
  </div>
</template>
