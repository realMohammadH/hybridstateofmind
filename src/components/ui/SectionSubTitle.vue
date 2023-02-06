<script setup>
import { defineProps } from "vue";
const props = defineProps({
  fontSize: {
    type: String,
  },
  margin: {
    type: String,
  },
});
</script>

<template>
  <h3
    class="section-sub-title"
    :style="{ fontSize: props.fontSize, margin: props.margin }"
  >
    <slot />
  </h3>
</template>

<style scoped>
.section-sub-title {
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;
  color: #1c303c;
  font-weight: 500;
}
</style>