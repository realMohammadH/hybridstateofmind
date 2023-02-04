<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  shadow: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="grid" :class="{ activeShadow: !props.shadow }">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid black;
  border-radius: 16px;
}
.activeShadow {
  box-shadow: 10px 10px 0px -3px #000;
}
</style>