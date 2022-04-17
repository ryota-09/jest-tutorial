<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>&nbsp;|
  <RouterLink to="/about">More</RouterLink>&nbsp;|
    <RouterView />
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-weight: normal;
}
</style>
