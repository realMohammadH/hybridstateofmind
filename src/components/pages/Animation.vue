<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);

const parentBox = ref(null);
const itemRefs = ref([]);
const box = ref([]);

const boxes = ref([
  {
    class: "box1",
    style: {
      background: "red",
    },
  },
  {
    class: "box2",
    style: {
      background: "yellow",
    },
  },
  {
    class: "box3",
    style: {
      background: "blue",
    },
  },
  {
    class: "box4",
    style: {
      background: "green",
    },
  },
  {
    class: "box5",
    style: {
      background: "goldenrod",
    },
  },
  {
    class: "box6",
    style: {
      background: "gold",
    },
  },
]);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: box.value,
    start: "top center",
    markers: true,
  },
});

const sectionImage = ref("../../assets/images/audience-image.png");
const x_box = ref(null);

const star = ref(null);

const myCard = ref(null);

onMounted(() => {
  box.value.forEach((b, i) => {
    const tween = gsap.timeline({
      scrollTrigger: {
        trigger: b,
        start: "top center",
        end: "top center",
        markers: true,
        scrub: true,
      },
    });

    tween.fromTo(
      b,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, delay: 3, rotation: 360 }
    );
  });

  gsap.fromTo(x_box.value, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });

  gsap.to(star.value.$el, {
    scale: 2,
  });

  gsap.to(myCard.value.$e, {
    scale: 2,
  });
});
</script>

<template>
  <div class="animation" ref="parentBox">
    <div
      v-for="b in boxes"
      :key="b"
      class="box"
      :class="[b.class]"
      :style="{ background: b.style.background }"
      ref="box"
    ></div>

    <float-image
      width="279px"
      height="279px"
      :zIndex="99"
      ref="star"
      :image="$renderImage(sectionImage)"
    >
    </float-image>

    <card width="200px" height="200px" background="#BEF0CB" ref="myCard"></card>

    <wrapper class="x_box" width="200px" height="200px" ref="x_box"> </wrapper>
  </div>
</template>

<style scoped>
.animation {
  background-color: bisque;
  width: 1215px;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  gap: 300px;
  justify-content: center;
}

.box {
  height: 200px;
  width: 200px;
}

.boxv2:nth-child(1) {
  background-color: coral;
}
.boxv2:nth-child(2) {
  background-color: lightslategray;
}
.boxv2:nth-child(3) {
  background-color: darkorange;
}
.x_box {
  background: #ad7be9;
}
</style>