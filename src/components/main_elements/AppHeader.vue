<script setup>
import { ref } from "vue";
const navLinks = ref([
  {
    title: "Member Benefits",
    path: "#",
  },
  {
    title: "Code Of Conduct",
    path: "#",
  },
  {
    title: "FAQ's",
    path: "#",
  },
]);
</script>

<template>
  <header>
    <container>
      <nav>
        <ul class="navbar">
          <logo></logo>
          <li>
            <ul class="navbar-list">
              <app-link
                v-for="l in navLinks"
                :key="l"
                :path="l.path"
                color="#031926"
                >{{ l.title }}</app-link
              >
              <app-button background="#6E61FF" color="white" padding="13px 26px"
                >Join The Community</app-button
              >
            </ul>
          </li>
        </ul>
      </nav>
    </container>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: inherit;
  margin: 0 auto;
  height: 122px;
  padding: 24px 0;
  z-index: 999;
  background-color: var(--secondary-color);
}
header nav {
  height: 100%;
}
:is(.navbar, .navbar-list) {
  display: flex;
  height: 100%;
  align-items: center;
}
.navbar {
  justify-content: space-between;
}
.navbar-list {
  gap: 27px;
}
</style>