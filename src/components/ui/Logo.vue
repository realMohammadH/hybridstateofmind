<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({});
</script>

<template>
  <span class="logo"> </span>
</template>

<style scoped>
.logo {
  display: block;
  position: relative;
  width: 90px;
  height: 75px;
}
.logo::before {
  content: "";
  position: absolute;
  background: #ffffff;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  width: 138px;
  height: 138px;
  top: 50%;
  left: 50%;
  translate: (-50%, -50%);
}
</style>