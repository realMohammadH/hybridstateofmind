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
]);

onMounted(() => {
  // console.log(itemRefs.value);
  console.log(box.value);
  /*
gsap.to(box1.value, {
scrollTrigger: {
  trigger: box1.value,
  pin: true, // pin the trigger element while active
  start: "bottom bottom", // when the top of the trigger hits the top of the viewport
  end: "+=500", // end after scrolling 500px beyond the start
  scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  snap: {
    snapTo: "labels", // snap to the closest label in the timeline
    duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  },
},
});
*/
  /*
  gsap.to(box2.value, {
    scrollTrigger: {
      trigger: box2.value,
      start: " center center ",
      markers: true,
      scrub: true,
    },
    scale: 2,
    // delay: 1,
    duration: 2,
  });
  */

  box.value.forEach((b, i) => {
    ScrollTrigger.create({
      trigger: b,
      start: "top center",
      pin: true,
      pinSpacing: false,
      end: "+=500",
    });
  });

  box.value.forEach((b, i) => {
    console.log(b, i);
  });
});
</script>

<template>
  <div class="animation" ref="parentBox">
    <!-- <div class="box box_1" ref="itemRefs"></div>
    <div class="box box_2" ref="itemRefs"></div>
    <div class="box box_3" ref="itemRefs"></div> -->

    <div
      v-for="b in boxes"
      class="mybox"
      :class="[b.class]"
      :style="{ background: b.style.background }"
      ref="box"
    ></div>
  </div>
</template>

<script>
// box.value.forEach((b, i) => {
//   ScrollTrigger.create({
//     trigger: b,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
//   });
// });
</script>

<style scoped>
.animation {
  background-color: bisque;
  width: 1215px;
  margin: 0 auto;
  min-height: 100vh;
}

.box {
  width: 100%;
  height: 100vh;
}

.box_1 {
  background-color: aqua;
}

.box_2 {
  background-color: blue;
}

.box_3 {
  background-color: darkorange;
}

.box_4 {
  background: black;
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px; */
  height: auto;
}
.mybox {
  height: 100vh;
  width: 100%;
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
</style>