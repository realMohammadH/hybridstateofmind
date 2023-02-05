<script setup>
import { ref, defineProps, computed } from "vue";
const props = defineProps({
  top: {
    type: String,
  },
  right: {
    type: String,
  },
  bottom: {
    type: String,
  },
  left: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  translateX: {
    type: String,
    default: "0px",
  },
  translateY: {
    type: String,
    default: "0px",
  },
});

const translate = computed(() => {
  return `translate(${props.translateX}, ${props.translateY})`;
});

const floatImageStyle = ref({
  top: props.top,
  right: props.right,
  bottom: props.bottom,
  left: props.left,
  width: props.width,
  height: props.height,
  transform: translate,
});
</script>

<template>
  <figure class="float-image" :style="floatImageStyle">
    <slot></slot>
  </figure>
</template>

<style scoped>
.float-image {
  position: absolute;
  background: #dff;
}
</style>