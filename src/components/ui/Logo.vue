<script setup>
import { ref, defineProps } from "vue";
import LogoSvg from "./LogoSvg.vue";
const props = defineProps({
  color: {
    type: String,
  },
  backDrop: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="logo" :class="{ backDrop: props.backDrop }">
    <LogoSvg :color="props.color" />
  </div>
</template>

<style scoped>
.logo {
  width: 90px;
  flex-basis: 90px;
  flex-shrink: 0;
  height: 75px;
  display: grid;
  place-items: center;
}
.backDrop {
  background: #ffffff;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  flex-basis: 138px;
  height: 138px;
}
</style>