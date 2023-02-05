<script setup>
import { ref } from "vue";
</script>

<template>
  <header>
    <container>
      <nav>
        <ul class="navbar">
          <logo></logo>
          <li>
            <ul class="nav-list">
              <li></li>
            </ul>
          </li>
        </ul>
      </nav>
    </container>
  </header>
</template>

<style scoped>
* {
  outline: 0.5px solid greenyellow;
}
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 122px;
  padding: 24px 0;
}
header nav {
  height: 100%;
}
:is(.navbar, .nav-list) {
  display: flex;
  height: 100%;
  align-items: center;
}
.navbar {
  justify-content: space-between;
}
</style>