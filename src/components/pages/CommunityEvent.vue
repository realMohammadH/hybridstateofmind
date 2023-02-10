<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";

const sectionVectorOne = ref("../../assets/images/community-vector.png");
const sectionVectorTwo = ref("../../assets/images/community-vector-2.png");
const sectionVectorThree = ref("../../assets/images/community-vector-3.png");
const sectionContentImage = ref(
  "../../assets/images/community-events-image.png"
);
</script>

<template>
  <section-wrapper class="community-events" background="#DAC3FF">
    <float-image
      height="90px"
      width="420px"
      index="99"
      top="0"
      right="50%"
      translateX="50%"
      translateY="-50%"
    >
      <img :src="renderImage(sectionVectorTwo)" alt="" srcset="" />
    </float-image>
    <container>
      <wrapper width="570px" margin="0 0 48px">
        <section-title margin="0 0 15px"
          >The Only Event Community You’ll Ever Need</section-title
        >
        <section-sub-title
          >Once you’re in, the event world is your oyster! Here’s a glimpse of
          what you can expect once you’re part of our community
        </section-sub-title>
      </wrapper>
      <float-image
        width="760px"
        height="464px"
        bottom="0"
        translateY="15%"
        index="99"
      >
        <img :src="renderImage(sectionContentImage)" alt="" srcset="" />
      </float-image>
    </container>
    <float-image height="540px" bottom="0" left="0" right="0" translateY="50%">
      <img :src="renderImage(sectionVectorOne)" alt="" srcset="" />
    </float-image>
    <float-image
      width="110px"
      height="110px"
      left="16%"
      top="50%"
      translateX="50%"
      translateY="50%"
    >
      <img :src="renderImage(sectionVectorThree)" alt="" srcset="" />
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  overflow: visible !important;
  /* clip-path: inset(0 0 5% 0); */
  height: 750px;
  padding-bottom: 0% !important;
}
.community-events {
  text-align: center;
}
</style>