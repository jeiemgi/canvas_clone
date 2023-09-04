import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const easings = {
  mask: CustomEase.create("custom", "M0,0 C0.77,0 0.18,1 1,1"),
};

export default easings;
