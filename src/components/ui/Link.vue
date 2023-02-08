<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  fontSize: {
    type: String,
  },
  color: {
    type: String,
  },
  path: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <a
    class="link"
    :href="props.path"
    :style="{ color: props.color, fontSize: props.fontSize }"
  >
    <slot />
  </a>
</template>

<style scoped>
.link {
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
}
</style>