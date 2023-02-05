<script setup>
import Hero from "./components/Pages/Hero.vue";
import Audience from "./components/Pages/Audience.vue";
import Contents from "./components/Pages/Contents.vue";
import CommunityEvent from "./components/Pages/CommunityEvent.vue";
import GettingStarted from "./components/Pages/GettingStarted.vue";
import Guidelines from "./components/Pages/Guidelines.vue";
import EventLeadership from "./components/Pages/EventLeadership.vue";
import FAQ from "./components/Pages/FAQ.vue";
import Footer from "./components/Pages/Footer.vue";
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
