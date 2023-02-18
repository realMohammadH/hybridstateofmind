<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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

const icon1 = ref("../../assets/images/start-section-v1.png");
const icon2 = ref("../../assets/images/start-section-v2.png");

const icons = ref([
  {
    icon: icon1,
    style: {
      width: "200px",
      height: "200px",
      top: "5%",
      right: "15%",
    },
  },
  {
    icon: icon2,
    style: {
      width: "200px",
      height: "200px",
      bottom: "0%",
      left: "0%",
      translateX: "-40%",
      translateY: "50%",
      zIndex: 99,
    },
  },
]);

const stars = ref([]);
onMounted(() => {
  stars.value.forEach((s) => {
    gsap.to(s.$el, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 2,
    });
  });
});
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
          :cardImage="$renderImage(c.image)"
          cardImageMargin="0 0 24px"
        >
        </card>
      </grid>
    </container>
    <float-image
      v-for="i in icons"
      :key="i"
      v-bind="i.style"
      :image="$renderImage(i.icon)"
      ref="stars"
    >
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  overflow: visible !important;
  padding-top: 180px !important;
  background-color: white;
}
</style>