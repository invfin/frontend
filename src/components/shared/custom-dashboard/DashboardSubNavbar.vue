<script setup lang="ts">
import { ChevronRightIcon } from 'vue-tabler-icons';

const props = defineProps({
  title: String,
  icon: String
});
</script>

<template>
  <v-row class="page-breadcrumb mb-1">
    <v-col cols="12" md="12">
      <v-card variant="flat" class="px-4 py-3">
        <v-row no-gutters class="align-center">
          <v-col md="5">
            <h3 class="text-h3">{{ props.title }}</h3>
          </v-col>

          <v-col md="7" sm="12" cols="12" class="text-right">
            <slot />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
