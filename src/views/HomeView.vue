<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/round-logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/pages/HelloWorld.vue' // @ is an alias to /src
import NavBar from '@/components/navbar/NavBar.vue'
@Options({
  components: {
    HelloWorld,
    NavBar,
  },
})
export default class HomeView extends Vue {}
</script>
