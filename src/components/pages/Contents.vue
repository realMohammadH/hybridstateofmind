<script setup>
import { ref } from "vue";

const cardsContent = ref([
  "Stay updated with what’s hot in the world of events!",
  "Discover your next big break or opportunity!",
  "Voice your queries and crowdsource ideas.",
  "Crack open the most difficult challenges with help from peers.",
  "Share insights and make events better for everyone.",
  "Make business connections and network with peers.",
]);
</script>

<template>
  <section-wrapper background="var(--primary-color)">
    <container>
      <section-title color="white" margin="0 0 80px">
        What’s in store?
      </section-title>
      <grid width="100%" gridCardsWidth="350px" gap="80px 30px">
        <card
          v-for="c in cardsContent"
          :cardTitle="c"
          background="white"
          :shadow="true"
          width="350px"
          padding="60px 30px 35px"
          cardTitleSize="22px"
          :rounded="true"
        >
        </card>
      </grid>
    </container>
  </section-wrapper>
</template>

<style scoped>
.mygrid :deep(.grid) {
  grid-template-columns: repeat(auto-fit, 350px);
}
</style>