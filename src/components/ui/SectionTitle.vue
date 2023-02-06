<script setup>
import { defineProps } from "vue";

const props = defineProps({
  fontSize: {
    type: String,
  },
  margin: {
    type: String,
  },
  color: {
    type: String,
  },
});
</script>

<template>
  <h2
    class="section-title"
    :style="{
      fontSize: props.fontSize,
      margin: props.margin,
      color: props.color,
    }"
  >
    <slot />
  </h2>
</template>

<style scoped>
.section-title {
  font-size: 36px;
  color: #031926;
  font-weight: 700;
}
</style>