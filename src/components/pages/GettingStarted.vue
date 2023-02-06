<script setup>
import { ref } from "vue";

const cardsData = ref([
  {
    title: "Update your Slack profile.",
    subTitle:
      "Where do you work and what do you do? Make sure to add a profile picture.",
  },
  {
    title: "Say Hello!",
    subTitle: "Introduce yourself in the #introductions channel.",
  },
  {
    title: "Get notified!",
    subTitle:
      "Set your Slack notifications however you prefer. Join any channel you wish!",
  },
]);
</script>

<template>
  <section-wrapper>
    <container>
      <section-title margin="0 0 48px">Before you jump in</section-title>
      <grid gridCardsWidth="300px" gap="105px">
        <card
          v-for="c in cardsData"
          :cardTitle="c.title"
          cardTitleMargin="0 0 15px"
          :cardSubTitle="c.subTitle"
          width="300px"
          cardImageMargin="0 0 24px"
        >
        </card>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
</style>