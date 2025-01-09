import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import Myskills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Myskills></Myskills>
      <AboutMe/>
      <MyPortfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}
