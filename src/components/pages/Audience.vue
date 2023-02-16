<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardIcon1 = ref("../../assets/images/star.png");
const cardIcon2 = ref("../../assets/images/orange.png");

const cardIcons = ref([
  {
    icon: cardIcon1,
    style: {
      width: "100px",
      height: "100px",
      left: "0",
      top: "0",
      translateX: "-45%",
      translateY: "-45%",
    },
  },
  {
    icon: cardIcon2,
    style: {
      width: "120px",
      height: "120px",
      right: "0",
      top: "0",
      translateX: "45%",
      translateY: "-45%",
    },
  },
]);

const sectionImage = ref("../../assets/images/audience-image.png");

const vector = ref([]);

const section = ref(null);

const star = ref(null);

const starAnimationSpeed = ref(2);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value.$el,
      start: "top center",
      end: "10% 50%",
    },
  });

  vector.value.forEach((v) => {
    tl.fromTo(
      v.$el,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4 }
    );
  });

  // window.addEventListener("scroll", () => {
  //   starAnimationSpeed.value = 4;
  // });
  gsap.to(star.value.$el, {
    rotation: 360,
    repeat: -1,
    ease: "none",
    duration: starAnimationSpeed.value,
  });
});
</script>

<template>
  <section-wrapper ref="section">
    <container>
      <card
        width="730px"
        height="273px"
        padding="50px 34px"
        background="#DCF7E7"
        radius="24px"
        :shadow="true"
        :rounded="true"
        ref="myCard"
      >
        <template #title>
          <section-title margin="0 0 22px">Who is this for?</section-title>
        </template>
        <template #sub-title>
          <section-sub-title>
            Simply put, this community is for anyone who is actively engaged in
            organizing and planning events, or plans to do. So whether you are a
            CMO, CHRO, a field marketer, or an aspiring event expert, this
            community is for you.
          </section-sub-title>
        </template>
        <float-image
          v-for="c in cardIcons"
          :key="c"
          v-bind="c.style"
          ref="vector"
          :image="$renderImage(c.icon)"
        ></float-image>
      </card>
    </container>
    <float-image
      width="279px"
      height="279px"
      bottom="0"
      left="0"
      translateY="50%"
      :zIndex="99"
      translateX="-40%"
      ref="star"
      :image="$renderImage(sectionImage)"
    >
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  overflow: visible !important;
  background-color: white;
}
:deep(.card) {
  text-align: center !important;
}

.ball {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
</style>