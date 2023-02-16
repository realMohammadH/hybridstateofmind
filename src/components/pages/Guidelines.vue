<script setup>
import { ref } from "vue";
const rightColCard = ref({
  title: "Note:",
  subTitle:
    "Info shared by members cannot be considered as legal advice. Members are not responsible for the same.",
});

const leftColCards = ref([
  {
    title: "Bring only good vibes!",
    subTitle:
      "The pulse of our community depends on your genuine intent to collaborate and help, so bring in that dose of positivity, please!",
    backgroundColor: "#DAC3FF",
    padding: "26px 26px 26px 43px",
    rounded: true,
    icon: "../../assets/images/guidlines-1.png",
    iconStyle: {
      width: "170px",
      height: "66px",
      top: "0",
      right: "0",
      translateX: "40%",
      translateY: "-50%",
    },
  },
  {
    title: "Please refrain from Spamming or selling!",
    subTitle:
      "Let’s keep our community focused, clean and free from promotions! Nobody wants that!",
    backgroundColor: "#DCF7E7",
    padding: "26px 26px 26px 43px",
    rounded: true,
    icon: "../../assets/images/guidlines-2.png",
    iconStyle: {
      width: "133px",
      height: "97px",
      top: "0%",
      left: "-15%",
      translateX: "0%",
      translateY: "-50%",
    },
  },
  {
    title: "Speak your mind!",
    subTitle:
      "This is a safe space that's free of bias, conflict and criticism. ",
    backgroundColor: "#FFA352",
    padding: "26px 26px 26px 43px",
    rounded: true,
    icon: "../../assets/images/guidlines-3.png",
    iconStyle: {
      width: "170px",
      height: "127px",
      top: "0",
      right: "0",
      translateX: "40%",
      translateY: "-50%",
    },
  },
]);

const icon1 = ref("../../assets/images/guidlines-v1.png");
const icon2 = ref("../../assets/images/guidlines-v2.png");

const icons = ref([
  {
    icon: icon1,
    style: {
      width: "190px",
      height: "190px",
      bottom: "0%",
      right: "0%",
      translateY: "50%",
      translateX: "30%",
      zIndex: 99,
    },
  },
  {
    icon: icon2,
    style: {
      width: "72px",
      height: "72px",
      bottom: "0%",
      left: "5%",
      translateY: "60%",
      zIndex: 99,
    },
  },
]);
</script>

<template>
  <section-wrapper background="var(--secondary-color)">
    <container>
      <flex alignItems="start" gap="220px">
        <grid width="50%">
          <wrapper margin="0 0 32px">
            <section-title margin="0 0 15px"
              >The rules are simple!</section-title
            >
            <section-sub-title
              >To help maintain a safe and welcoming environment, we ask that
              all community members adhere to a few guidelines that are listed
              below.
            </section-sub-title>
          </wrapper>
          <card
            width="445px"
            :rounded="true"
            background="white"
            padding="18px 18px 18px 40px"
            :cardTitle="rightColCard.title"
            cardTitleSize="16px"
            :cardSubTitle="rightColCard.subTitle"
            cardSubtitleSize="15px"
          >
          </card>
        </grid>
        <grid width="50%" gap="90px">
          <card
            v-for="c in leftColCards"
            :key="c"
            :cardTitle="c.title"
            :cardSubTitle="c.subTitle"
            :background="c.backgroundColor"
            :padding="c.padding"
            :rounded="c.rounded"
          >
            <float-image v-bind="c.iconStyle" :image="$renderImage(c.icon)">
            </float-image>
          </card>
        </grid>
      </flex>
    </container>
    <float-image
      v-for="i in icons"
      :key="i"
      v-bind="i.style"
      :image="$renderImage(i.icon)"
    >
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  overflow: visible !important;
}
</style>