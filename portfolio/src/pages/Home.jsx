import './Pages.css';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}