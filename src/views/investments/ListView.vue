<script setup lang="ts">
import PortfolioAllocations from './components/PortfolioAllocations.vue';
import PortfolioValueLineChart from './components/PortfolioValueLineChart.vue';
import PortfolioRadarChart from './components/PortfolioRadarChart.vue';
import CustomizableDashboard from '@/components/shared/custom-dashboard/CustomizableDashboard.vue';
</script>

<template>
  <CustomizableDashboard />
  <v-row>
    <v-col cols="12" lg="8">
      <PortfolioValueLineChart />
    </v-col>
    <v-col cols="12" lg="4">
      <PortfolioRadarChart />
    </v-col>
    <v-col cols="12" lg="12">
      <PortfolioAllocations />
    </v-col>
  </v-row>
</template>
