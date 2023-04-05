<script lang="ts" setup>
import { generateDataAndColumns, Column, Row } from "@/components/Tables/utils";
import TooltipLink from "@/components/Tables/TooltipLink.vue";

const props = defineProps<{
  tableInformation: any;
}>();
const [data, columns]: [Row[], Column[]] = generateDataAndColumns(
  props.tableInformation
);
</script>

<template>
  <div class="item-card">
    <el-table :data="data" style="width: 100%; height: 100%" border>
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :fixed="column.fixed"
        :prop="column.prop"
        :label="column.label"
      >
        <template #default="scope" v-if="column.prop === 'fields'">
          <div style="display: flex; align-items: center">
            <span style="margin-right: 10px">{{ scope.row.fields }}</span>
            <TooltipLink :rowInformation="scope.row" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
