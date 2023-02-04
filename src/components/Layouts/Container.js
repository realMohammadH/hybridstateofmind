import { h } from "vue";
export const container = () => {
  return h("div", {
    class: "container",
    style: {
      margin: "0 auto",
      width: "1110px",
      height: "100%",
    },
  });
};
