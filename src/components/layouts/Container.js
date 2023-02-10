import { h } from "vue";
export const container = (props, { slots }) => {
  return h(
    "div",
    {
      class: "container",
      style: {
        margin: "0 auto",
        width: "1110px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        zIndex: '1'
      },
    },
    slots
  );
};
