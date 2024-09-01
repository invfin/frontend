<script setup lang="ts">
import CustomizableDashboard from '@/components/shared/custom-dashboard/CustomizableDashboard.vue';
import { ref } from 'vue';

const dashboard = ref(null);
</script>

<template>
  <CustomizableDashboard v-if="dashboard !== null" />
  <div v-else></div>
</template>
