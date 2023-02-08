<script setup>
import { ref } from "vue";
const footerLinks = ref([
  "Member Benefits",
  "Code of Conduct",
  "FAQ",
  "Contact Us",
]);
</script>

<template>
  <footer>
    <container>
      <flex alignItems="flex-start">
        <wrapper width="50%">
          <flex gap="40px">
            <logo :backDrop="true" color="#29314D"></logo>
            <section-sub-title color="#CDD1D4" class="footer-description">
              Hybrid State Of Mind (HSoM) is a slack community for event
              professionals. This community is designed to help event
              professionals connect, share advice, and ask questions.
            </section-sub-title>
          </flex>
        </wrapper>
        <wrapper width="50%" class="right-col">
          <grid gap="23px">
            <app-link
              v-for="l in footerLinks"
              :key="l"
              class="footer-link"
              color="#cdd1d4"
              fontSize="18px"
              >{{ l }}</app-link
            >
          </grid>
        </wrapper>
      </flex>
      <p class="copyright">
        &copy; 2022 Hybrid State of Mind
        <span class="privacy">Privacy Policy</span>
      </p>
    </container>
  </footer>
</template>

<style scoped>
footer {
  background-color: #29314d;
  padding: 64px 200px;
}
.right-col {
  border-left: 1px solid #68757d;
  padding-left: 72px;
}
.footer-link {
  text-transform: capitalize;
}
.footer-link:nth-child(3) {
  text-transform: uppercase;
}
.footer-link:last-child {
  color: #dac3ff !important;
}
.copyright {
  font-size: 13px;
  color: #cdd1d4;
  font-weight: 600;
  margin-top: 15px;
  margin-right: auto;
}
.privacy {
  display: inline-block;
  margin-left: 18px;
  color: #9aa3a8;
}
</style>