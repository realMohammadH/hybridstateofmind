<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  background: {
    type: String,
  },
  color: {
    type: String,
  },
  padding: {
    type: String,
  },
  path: {
    type: String,
    default: "#",
  },
});

const btnStyle = ref({
  backgroundColor: props.background,
  padding: props.padding,
});
</script>

<template>
  <app-link
    class="btn"
    :style="btnStyle"
    :color="props.color"
    :href="props.path"
    :path="props.path"
  >
    <slot />
  </app-link>
</template>

<style scoped>
.btn {
  display: inline-block;
  background-color: #6e61ff;
  border-radius: 50vw;
  color: white;
  font-size: 18px;
  text-align: center;
  border: 2px solid black;
  box-shadow: 4px 4px 0px 0px #000000;
}
</style>