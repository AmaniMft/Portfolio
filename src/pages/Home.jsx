import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="min-h-screen bg-backgound text-foreground overflow-x-hidden">

      <ThemeToggle/>
      <StarBackground/>
      <NavBar/>
      
      <main>
        <HeroSection/>
        <AboutMeSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>  

    

    </div>
  );
}

export default Home;
