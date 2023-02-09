<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";

const cardsContent = ref([
  {
    title: "Stay updated with what’s hot in the world of events!",
    image: "../../assets/images/store-1.png",
  },
  {
    title: "Discover your next big break or opportunity!",
    image: "../../assets/images/store-2.png",
  },
  {
    title: "Voice your queries and crowdsource ideas.",
    image: "../../assets/images/store-3.png",
  },
  {
    title: "Crack open the most difficult challenges with help from peers.",
    image: "../../assets/images/store-4.png",
  },
  {
    title: "Share insights and make events better for everyone.",
    image: "../../assets/images/store-5.png",
  },
  {
    title: "Make business connections and network with peers.",
    image: "../../assets/images/store-6.png",
  },
]);

const imageStyle = ref({
  top: "0",
  left: "0",
  translateX: "20%",
  translateY: "-50%",
});
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
          :key="c"
          :cardTitle="c.title"
          background="white"
          :shadow="true"
          width="350px"
          padding="60px 30px 35px"
          cardTitleSize="22px"
          :rounded="true"
        >
          <float-image v-bind="imageStyle">
            <img :src="renderImage(c.image)" alt="" />
          </float-image>
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