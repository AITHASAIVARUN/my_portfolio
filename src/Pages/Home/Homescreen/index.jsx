import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import Myskills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Myskills></Myskills>
      <AboutMe/>
      <MyPortfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}
