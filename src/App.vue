<script setup lang="ts">
import { list } from "./apis";
import { RouterLink, RouterView } from "vue-router";

list()
  .then((response) => {
    console.log("mock res", response);
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
