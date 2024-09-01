<script setup lang="ts">
// imported components
import TotalEarning from './components/TotalEarning.vue';
import TotalOrder from './components/TotalOrder.vue';
import TotalIncome from './components/TotalIncome.vue';
import TotalGrowth from './components/TotalGrowth.vue';
import PopularStocks from './components/PopularStocks.vue';

const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
  }
];
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="bg-lightwarning rounded-md pa-5 my-3 circle sm-circle lg-circle hide-menu">
        <h4>Upgrade To Pro</h4>
        <h6 class="text-subtitle-2 text-medium-emphasis pr-11 mb-3 mt-2">To get more features and components</h6>
        <v-btn color="warning" variant="flat" target="_" href="https://codedthemes.com/item/berry-vue-admin-dashboard/"> Go Premium </v-btn>
      </div>
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total Earning -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalEarning />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Order -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalOrder />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Income -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalIncome />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total Growth -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="8">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
      </v-carousel>
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Popular Stocks -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="4">
      <PopularStocks />
    </v-col>
  </v-row>
</template>
