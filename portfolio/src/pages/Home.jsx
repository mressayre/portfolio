import './Pages.css';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}