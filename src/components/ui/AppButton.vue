<script setup>
import { ref } from "vue";
</script>

<template>
  <a class="btn">
    <slot />
  </a>
</template>

<style scoped>
.btn {
  display: grid;
  place-items: center;
  background-color: #6e61ff;
  border-radius: 50vw;
  color: white;
  width: 166px;
  height: 56px;
  font-size: 18px;
  text-align: center;
  border: 2px solid black;
  box-shadow: 4px 4px 0px 0px #000000;
}
</style>