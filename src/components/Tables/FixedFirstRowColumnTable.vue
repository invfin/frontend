<script lang="ts" setup>
const props = defineProps<{
  tableInformation: any;
}>();
</script>

<template>
  <div class="item-card">
    <el-table :data="props.tableInformation">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="320" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>
  </div>
</template>
