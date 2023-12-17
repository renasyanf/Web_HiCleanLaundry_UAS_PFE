import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Contact from "../Contact";
import MySkills from "../MySkills";
import Prices from "../Testimoni";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}
