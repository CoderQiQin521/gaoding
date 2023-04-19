<script setup lang="ts">
import axios from "axios";
import { RouterLink, RouterView } from "vue-router";

axios
  .get("/api/list")
  .then((response) => {
    console.log("response", response);
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
