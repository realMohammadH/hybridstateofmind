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
  },
  {
    title: "Please refrain from Spamming or selling!",
    subTitle:
      "Let’s keep our community focused, clean and free from promotions! Nobody wants that!",
  },
  {
    title: "Speak your mind!",
    subTitle:
      "This is a safe space that's free of bias, conflict and criticism.",
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
        <grid width="50%"> </grid>
      </flex>
    </container>
  </section-wrapper>
</template>

<style scoped>
</style>