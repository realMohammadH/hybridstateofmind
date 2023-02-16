<script setup>
import { ref, onMounted } from "vue";


const sectionImage = ref("../../assets/images/store-image.png");

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
  width: "80px",
  height: "80px",
});
</script>

<template>
  <section-wrapper>
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
          <float-image v-bind="imageStyle" :image="$renderImage(c.image)">
          </float-image>
        </card>
      </grid>
    </container>
    <float-image
      width="270px"
      height="270px"
      bottom="0"
      right="0"
      translateX="45%"
      translateY="45%"
      :image="$renderImage(sectionImage)"
    >
    </float-image>
  </section-wrapper>
</template>

<style scoped>
section {
  background-color: var(--primary-color);
}
</style>