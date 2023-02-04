<script setup>
import { ref, defineProps, computed } from "vue";
const props = defineProps({
  flow: {
    type: String,
  },
  rowGap: {
    type: String,
  },
  columnGap: {
    type: String,
  },
  gap: {
    type: String,
  },
  gridCardsWidth: {
    type: String,
  },
  gridCardsHeight: {
    type: String,
  },
  padding: {
    type: String,
  },
});

const cardsWidth = computed(() => `repeat(auto-fit, ${props.gridCardsWidth})`);
const cardsHeight = computed(
  () => `repeat(auto-fit, ${props.gridCardsHeight})`
);

const gridStyle = ref({
  padding: props.padding,
  gridAutoFlow: props.flow,
  gridTemplateColumns: cardsWidth,
  gridTemplateRows: cardsHeight,
  gridRowGap: props.rowGap,
  gridColumnGap: props.columnGap,
  gap: props.gap,
});
</script>

<template>
  <div class="grid" :style="{ gridStyle }">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-auto-flow: column;
}
</style>