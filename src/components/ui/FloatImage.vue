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
    default: "0",
  },
  translateY: {
    type: String,
    default: "0",
  },
  zIndex: {
    type: Number,
  },
  image: {
    type: String,
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
  zIndex: props.zIndex,
});
</script>

<template>
  <img
    class="float-image"
    :src="props.image"
    alt=""
    srcset=""
    :style="floatImageStyle"
  />
</template>

<style scoped>
.float-image {
  position: absolute;
}
</style>