<script setup lang="ts">
import bb from "billboard.js";

bb.generate({
  data: {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    type: "bar" // for ESM specify as: bar()
  },
  bar: {
    width: {
      ratio: 0.5
    }
  },
  bindto: "#barChart_1"
});
</script>

<template>
  <div id="barChart_1" />
</template>
