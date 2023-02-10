<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  className: {
    type: String,
    default: "card",
  },
  shadow: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
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
  cardImage: {
    type: String,
  },
  cardImageMargin: {
    type: String,
  },
  cardTitle: {
    type: String,
  },
  cardTitleSize: {
    type: String,
  },
  cardSubTitle: {
    type: String,
  },
  cardSubtitleSize: {
    type: String,
  },
  cardTitleMargin: {
    type: String,
  },
  cardSubTitleMargin: {
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
  <div
    :class="[
      props.className,
      { activeShadow: props.shadow, rounded: props.rounded },
    ]"
    :style="cardStyle"
  >
    <image-wrapper v-if="props.cardImage" :margin="props.cardImageMargin">
      <img :src="props.cardImage" alt="" />
    </image-wrapper>
    <h4
      class="card-title"
      v-if="props.cardTitle"
      :style="{ margin: props.cardTitleMargin, fontSize: props.cardTitleSize }"
    >
      {{ props.cardTitle }}
    </h4>
    <p
      class="card-sub-title"
      v-if="props.cardSubTitle"
      :style="{
        margin: props.cardSubTitleMargin,
        fontSize: props.cardSubtitleSize,
      }"
    >
      {{ props.cardSubTitle }}
    </p>
    <slot></slot>
    <slot name="title"></slot>
    <slot name="sub-title"></slot>
    <slot name="wrapper"></slot>
  </div>
</template>

<style scoped>
.card {
  text-align: start;
  height: 100%;
}
.rounded {
  border: 2px solid black;
  border-radius: 16px;
}
.activeShadow {
  box-shadow: 5px 5px 0px 0px #000;
}
.card-title {
  font-size: 24px;
  letter-spacing: -0.48px;
  color: #0f0f0f;
}
.card-sub-title {
  font-size: 18px;
  letter-spacing: -0.18px;
  color: #1c303c;
}
</style>