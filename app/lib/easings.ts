import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const easings = {
  mask: CustomEase.create("custom", "M0,0 C0.77,0 0.18,1 1,1"),

  one: CustomEase.create("custom", "M0,0 C0.4,0 0.18,1 1,1"),
  two: CustomEase.create("custom", "M0,0 C0.77,0 0.15,1 1,1"),
  three: CustomEase.create("custom", "M0,0 C0.2,0 0.2,1 1,1"),
};

export default easings;
