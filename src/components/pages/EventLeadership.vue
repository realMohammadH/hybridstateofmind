<script setup>
import { ref, render } from "vue";
import { renderImage } from "../composable/renderImage";

const icon1 = ref("../../assets/images/leaderShip-1.png");
const icon2 = ref("../../assets/images/leaderShip-2.png");
const icon3 = ref("../../assets/images/leaderShip-3.png");
const icon4 = ref("../../assets/images/leaderShip-4.png");
const icon5 = ref("../../assets/images/leaderShip-5.png");
const icon6 = ref("../../assets/images/leaderShip-6.png");

const icons = ref([
  {
    icon: icon1,
    style: {
      bottom: "-50%",
      left: "0",
      translateX: "-20%",
      translateY: "45%",
      width: "986px",
      height: "853px",
    },
  },
  {
    icon: icon2,
    style: {
      bottom: "0",
      right: "0",
      translateX: "28%",
      translateY: "60%",
      width: "834px",
      height: "627px",
    },
  },
  {
    icon: icon3,
    style: {
      width: "58px",
      height: "58px",
      bottom: "12%",
      right: "35%",
    },
  },
  {
    icon: icon4,
    style: {
      width: "100px",
      height: "100px",
      bottom: "28%",
      right: "9%",
    },
  },
  {
    icon: icon5,
    style: {
      width: "73px",
      height: "73px",
      bottom: "33%",
      left: "12%",
    },
  },
  {
    icon: icon6,
    style: {
      width: "113px",
      height: "113px",
      bottom: "0%",
      left: "0%",
      translateY: "48%",
    },
  },
]);
</script>

<template>
  <section-wrapper class="event-leader-ship">
    <container>
      <wrapper width="520px" align="center">
        <section-title margin="0 0 9px"
          >Ready to stay ahead of the events game?</section-title
        >
        <section-sub-title margin="0 0 24px"
          >Join our growing community today!</section-sub-title
        >
        <app-button background="white" color="#031926" padding="13px 26px"
          >Apply Now ></app-button
        >
      </wrapper>
    </container>
    <float-image v-for="i in icons" :key="i" v-bind="i.style">
      <img :src="renderImage(i.icon)" alt="" srcset="" />
    </float-image>
  </section-wrapper>
</template>

<style scoped>
.event-leader-ship {
  background-color: var(--primary-color);
}
</style>