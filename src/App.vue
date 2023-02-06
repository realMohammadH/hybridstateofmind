<script setup>
import Hero from "./components/pages/Hero.vue";
import Audience from "./components/pages/Audience.vue";
import Contents from "./components/pages/Contents.vue";
import CommunityEvent from "./components/pages/CommunityEvent.vue";
import GettingStarted from "./components/pages/GettingStarted.vue";
import Guidelines from "./components/pages/Guidelines.vue";
import EventLeadership from "./components/pages/EventLeadership.vue";
import FAQ from "./components/pages/FAQ.vue";
import Footer from "./components/pages/Footer.vue";
import AppHeader from "./components/main_elements/AppHeader.vue";
</script>

<template>
  <app-header></app-header>
  <main>
    <hero> </hero>
    <audience></audience>
    <contents></contents>
    <community-event></community-event>
    <getting-started></getting-started>
    <guidelines></guidelines>
    <event-leadership></event-leadership>
    <FAQ></FAQ>
  </main>
  <footer></footer>
</template>

<style scoped>
</style>
