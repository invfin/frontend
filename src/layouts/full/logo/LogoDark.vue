<template>
  <div class="logo">
    <RouterLink to="/">
      <svg height="32" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190">
        <path d="M3.53,0h182.94v44.78h-32.439V32.439H73.017L125.42,95l-52.403,62.561h81.015V145.22h32.439V190H3.53l79.574-95L3.53,0z"/>
      </svg>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
