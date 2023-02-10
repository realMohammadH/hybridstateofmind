<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";

const sectionVectorOne = ref("../../assets/images/start-section-v1.png");
const sectionVectorTwo = ref("../../assets/images/start-section-v2.png");

const cardsData = ref([
  {
    title: "Update your Slack profile.",
    subTitle:
      "Where do you work and what do you do? Make sure to add a profile picture.",
    image: "../../assets/images/start-card-1.png",
  },
  {
    title: "Say Hello!",
    subTitle: "Introduce yourself in the #introductions channel.",
    image: "../../assets/images/start-card-2.png",
  },
  {
    title: "Get notified!",
    subTitle:
      "Set your Slack notifications however you prefer. Join any channel you wish!",
    image: "../../assets/images/start-card-3.png",
  },
]);
</script>

<template>
  <section-wrapper>
    <container>
      <section-title margin="0 0 48px">Before you jump in</section-title>
      <grid gridCardsWidth="300px" gap="105px">
        <card
          v-for="c in cardsData"
          :key="c"
          :cardTitle="c.title"
          cardTitleMargin="0 0 15px"
          :cardSubTitle="c.subTitle"
          width="300px"
          :cardImage="renderImage(c.image)"
          cardImageMargin="0 0 24px"
        >
        </card>
      </grid>
    </container>
    <float-image width="200px" height="200px" top="5%" right="15%">
      <img :src="renderImage(sectionVectorOne)" alt="" srcset="" />
    </float-image>
    <float-image
      width="200px"
      height="200px"
      bottom="0%"
      left="0%"
      translateX="-40%"
      translateY="50%"
      index="99"
    >
      <img :src="renderImage(sectionVectorTwo)" alt="" srcset="" />
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  overflow: visible !important;
  padding-top: 180px !important;
}
</style>