import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import SectionWrapper from "./components/layouts/SectionWrapper.vue";
import { container } from "./components/layouts/Container";
import Flex from "./components/layouts/Flex.vue";
import Grid from "./components/layouts/Grid.vue";
import Card from "./components/ui/Card.vue";
import FloatImage from "./components/ui/FloatImage.vue";
import { wrapper } from "./components/layouts/Wrapper";
import SectionTitle from "./components/ui/SectionTitle.vue";
import SectionSubTitle from "./components/ui/SectionSubTitle.vue";
import AppButton from './components/ui/AppButton.vue'
const app = createApp(App);
app.component('app-button',AppButton)
app.component("section-sub-title", SectionSubTitle);
app.component("section-title", SectionTitle);
app.component("wrapper", wrapper);
app.component("float-image", FloatImage);
app.component("card", Card);
app.component("grid", Grid);
app.component("flex", Flex);
app.component("container", container);
app.component("section-wrapper", SectionWrapper);
app.mount("#app");
