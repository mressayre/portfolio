import('./Sections.css');
import ProjectsCarousel from '../components/ProjectsCarrousel';

export default function ProjectsSection() {
    return (
        <section className='projects-section'>
            <h2>My Contributions</h2>
            <ProjectsCarousel/>
        </section>
    );
}