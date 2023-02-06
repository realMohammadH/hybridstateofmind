import { h } from "vue";
export const wrapper = (props, { slots }) => {
  return h(
    "div",
    {
      class: "wrapper",
      style: {
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
      },
    },
    slots
  );
};
