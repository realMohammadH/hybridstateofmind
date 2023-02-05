<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  shadow: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  background: {
    type: String,
  },
  radius: {
    type: String,
  },
  padding: {
    type: String,
  },
});

const cardStyle = ref({
  padding: props.padding,
  width: props.width,
  height: props.height,
  background: props.background,
  borderRadius: props.radius,
});
</script>

<template>
  <div class="card" :class="{ activeShadow: !props.shadow }" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid black;
  border-radius: 16px;
  text-align: start;
}
.activeShadow {
  box-shadow: 10px 10px 0px -3px #000;
}
</style>