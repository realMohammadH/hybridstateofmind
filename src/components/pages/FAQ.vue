<script setup>
import { ref } from "vue";
import { renderImage } from "../composable/renderImage";

const cardsData = ref([
  "What is Hybrid State Of Mind? (HSoM)",
  "Who is it meant for?",
  "Is this community moderated? If yes, why?",
  "I have already applied to HSoM. How long before I hear back?",
  "Can I promote my services or products in any of the channels here?",
  "If I want to add my friends or colleagues to this community, how do I do it?",
  "Can I start a channel within the community or volunteer to become a moderator?",
]);

const icon1 = ref("../../assets/images/faq-v1.png");
const icon2 = ref("../../assets/images/faq-v2.png");

const icons = ref([
  {
    icon: icon1,
    style: {
      width: "160px",
      height: "160px",
      top: "22%",
      right: "8%",
    },
  },
  {
    icon: icon2,
    style: {
      width: "58px",
      height: "58px",
      bottom: "5%",
      left: "5%",
    },
  },
]);
</script>

<template>
  <section-wrapper class="faq">
    <container>
      <wrapper align="center" width="100%">
        <section-title margin="0 0 40px"> FAQ's </section-title>
        <card rounded="true" padding="0" className="grid-wrapper">
          <template #wrapper>
            <grid>
              <div class="card" v-for="c in cardsData" :key="c">{{ c }}</div>
            </grid>
          </template>
        </card>
      </wrapper>
    </container>
    <float-image v-for="i in icons" :key="i" v-bind="i.style">
      <img :src="renderImage(i.icon)" alt="" srcset="" />
    </float-image>
  </section-wrapper>
</template>

<style scoped>
.faq {
  background-color: var(--secondary-color);
}
.grid-wrapper {
  overflow: hidden;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 48px;
  color: #000;
  font-size: 22px;
  font-weight: 800;
  background-color: white;
}
.card:not(:last-child) {
  border-bottom: 2px solid #000;
}
</style>