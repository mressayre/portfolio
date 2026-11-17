import('./Sections.css');
import ProjectsCarousel from '../components/ProjectsCarrousel';

export default function ProjectsSection() {
    return (
        <section id="projects-section" className="section">
            <h2>My Projects</h2>
            <ProjectsCarousel/>
        </section>
    );
}