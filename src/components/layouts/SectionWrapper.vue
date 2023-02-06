<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  className: {
    type: String,
  },
  background: {
    type: String,
  },
});
</script>

<template>
  <section :class="props.className" :style="{ background: props.background }">
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  padding: 120px 0;
}
</style>