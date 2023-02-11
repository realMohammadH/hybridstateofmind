<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";
const heroFloatImage = ref("../../assets/images/hero-box.png");

const heroFloatImages = ref([
  {
    icon: heroFloatImage,
    style: {
      width: "1030px",
      height: "1030px",
      right: "25%",
      bottom: "-55%",
      translateX: "50%",
      translateY: "50%",
    },
  },
  {
    icon: heroFloatImage,
    style: {
      width: "1030px",
      height: "1030px",
      left: "-10%",
      bottom: "15%",
      translateX: "-50%",
      translateY: "50%",
    },
  },
  {
    icon: heroFloatImage,
    style: {
      width: "1030px",
      height: "1030px",
      right: "-40%",
      top: "-50%",
    },
  },
]);

const floatNavIcons = ref([
  "../../assets/icons/linkedin.svg",
  "../../assets/icons/twitter.svg",
]);
</script>

<template>
  <section-wrapper class="hero">
    <container>
      <wrapper width="730px" align="center">
        <section-title margin="0 0 15px" fontSize="67px">
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
    <float-image
      v-for="i in heroFloatImages"
      :key="i"
      v-bind="i.style"
      :image="renderImage(i.icon)"
    ></float-image>
    <div class="float-nav">
      <a href="#" v-for="i in floatNavIcons" :key="i">
        <img :src="renderImage(i)" alt="" />
      </a>
    </div>
  </section-wrapper>
</template>

<style scoped>
.hero {
  background-color: var(--secondary-color);
  padding-top: 220px;
}

.float-nav {
  position: absolute;
  right: 0;
  bottom: 5%;
  padding: 26px 16px;
  background-color: #dcf7e7;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}
.float-nav a {
  width: 24px;
  height: 24px;
}
</style>