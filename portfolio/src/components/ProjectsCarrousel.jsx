import { useState } from 'react';
import './Carousel.css';

const projectsData = [
  { id: 1, title: 'Refonte App Mobile UX', category: 'UX/UI Design', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Design System e-commerce', category: 'Design System', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Dashboard SaaS B2B', category: 'Product Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Application FinTech', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80' },
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projectsData.length;

  // Navigation infinie
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Calcul des index pour l'affichage gauche / centre / droite
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // On prépare les 3 cartes à afficher
  const visibleSlides = [
    { project: projectsData[prevIndex], position: 'left' },
    { project: projectsData[currentIndex], position: 'center' },
    { project: projectsData[nextIndex], position: 'right' },
  ];

  return (
    <section className="showcase-carousel">
      <h2 className="showcase-title">Mes Projets</h2>

      <div className="showcase-wrapper">
        {/* Flèche Gauche */}
        <button className="nav-arrow left-arrow" onClick={prevSlide} aria-label="Projet précédent">
          ←
        </button>

        {/* Scène des 3 cartes */}
        <div className="showcase-stage">
          {visibleSlides.map(({ project, position }) => (
            <div
              key={`${project.id}-${position}`}
              className={`showcase-card ${position}`}
              onClick={() => {
                if (position === 'left') prevSlide();
                if (position === 'right') nextSlide();
              }}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <span className="card-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Flèche Droite */}
        <button className="nav-arrow right-arrow" onClick={nextSlide} aria-label="Projet suivant">
          →
        </button>
      </div>
    </section>
  );
}