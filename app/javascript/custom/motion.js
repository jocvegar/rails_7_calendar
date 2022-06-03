import { animate } from "motion";

const motionBox = () => {
  animate(
    "#box",
    { rotate: 90 },
    {
      duration: 0.5,
      easing: "ease-in-out",
      repeat: Infinity,
      direction: "alternate",
    }
  );
};

document.addEventListener("turbo:load", function () {
  motionBox();
});
