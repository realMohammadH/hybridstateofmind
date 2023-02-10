<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";
const heroFloatImageOne = ref("../../assets/images/hero-box.png");
</script>

<template>
  <section-wrapper class="hero">
    <container>
      <wrapper width="730px" align="center">
        <section-title margin="0 0 15px">
          Where Event Folks Hang Out
        </section-title>
        <section-sub-title margin="0 0 40px">
          Welcome to our free Slack community for event professionals. This
          community is designed to help event professionals connect, share
          advice, and ask questions.
        </section-sub-title>
        <app-button padding="13px 26px">Apply Now</app-button>
      </wrapper>
    </container>
    <float-image width="1030px" height="1030px" right="-40%" top="-50%">
      <img :src="renderImage(heroFloatImageOne)" alt="" />
    </float-image>
    <float-image
      width="1030px"
      height="1030px"
      right="25%"
      bottom="-55%"
      translateX="50%"
      translateY="50%"
    >
      <img :src="renderImage(heroFloatImageOne)" alt="" />
    </float-image>
    <float-image
      width="1030px"
      height="1030px"
      left="-10%"
      bottom="15%"
      translateX="-50%"
      translateY="50%"
    >
      <img :src="renderImage(heroFloatImageOne)" alt="" />
    </float-image>
  </section-wrapper>
</template>

<style scoped>
.hero {
  background-color: var(--secondary-color);
  padding-top: 220px;
}
</style>