<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  margin: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
});
</script>

<template>
  <figure
    class="image-wrapper"
    :style="{ width: props.width, height: props.height, margin: props.margin }"
  >
    <slot></slot>
  </figure>
</template>

<style scoped>
.image-wrapper {
  overflow: hidden;
}
</style>