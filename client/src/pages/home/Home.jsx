import { Hero } from "./Hero.jsx";
import { Testimonials } from "./Testimonials.jsx";
import Features from "./Features.jsx";
import { IndustriesWeServe } from "./IndustriesWeServe.jsx";
import { FAQ } from "./FAQ.jsx";
import CTA from "./CTA.jsx";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <IndustriesWeServe />
      <FAQ />
      <CTA />
    </div>
  );
};
