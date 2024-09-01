<script setup lang="ts">
import TotalGrowth from './components/TotalGrowth.vue';
import GoalProgress from './components/GoalProgress.vue';
import TotalGoalsProgress from './components/TotalGoalsProgress.vue';
import TransactionsTable from './components/TransactionsTable.vue';
import PortfolioAllocations from './components/PortfolioAllocations.vue';
import PortfolioValueLineChart from './components/PortfolioValueLineChart.vue';
import PortfolioRadarChart from './components/PortfolioRadarChart.vue';
</script>

<template>
  <v-row>
    <v-col cols="12" lg="8">
      <GoalProgress />
    </v-col>
    <v-col cols="12" lg="4">
      <TotalGoalsProgress />
    </v-col>
    <v-col cols="12" lg="12">
      <TotalGrowth />
    </v-col>
    <v-col cols="12" lg="12">
      <TransactionsTable />
    </v-col>
  </v-row>
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
