<script lang="ts">
import { fetchData } from "@/utils/DataFetcher";
import { onMounted } from "vue";

export default {
  setup() {
    const { error, loading, data, performRequest } = fetchData();

    onMounted(() => {
      performRequest("lista-sectores/", {});
    });

    return {
      error,
      loading,
      data,
      msg: "HEY",
    };
  },
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="industry in data" :key="industry">
        {{ industry.sector }}
      </li>
    </ul>
    <button class="btn btn-primary">hey</button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
