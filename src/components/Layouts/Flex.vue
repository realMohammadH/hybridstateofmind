<script setup>
import { defineProps } from "vue";
const props = defineProps({
  gap: {
    type: String,
  },
  alignItems: {
    type: String,
  },
  justifyContent: {
    type: String,
  },
});

const flexStyle = ref({
  gap: props.gap,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
});
</script>

<template>
  <div class="flex" :style="{ flexStyle }"></div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>