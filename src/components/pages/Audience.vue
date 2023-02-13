<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";
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
</script>

<template>
  <section-wrapper>
    <container>
      <card
        width="730px"
        height="273px"
        padding="50px 34px"
        background="#DCF7E7"
        radius="24px"
        :shadow="true"
        :rounded="true"
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
          :image="renderImage(c.icon)"
        ></float-image>
      </card>
    </container>
    <float-image
      width="279px"
      height="279px"
      bottom="0"
      left="0"
      translateY="50%"
      index="99"
      translateX="-40%"
      :image="renderImage(sectionImage)"
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
</style>