import { useState } from 'react';
import './Carousel.css';

// Vos vrais projets issus de votre portfolio
const projectsData = [
  {
    id: 1,
    title: "ORIAME : Plateforme de Pilotage Augmenté par l'IA",
    category: "Stage de fin d'études | Orionis Consulting (B2B)",
    description: "Modélisation cognitive & UX, interface symbiotique calquée sur la boucle décisionnelle OODA, et intégration d'agents IA augmentés (RAG) avec architecture cloud sécurisée (Azure, Docker).",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: "IA & Culture : Analyse de l'Expérience Muséale",
    category: "Étude d'opportunités & Recherche UX",
    description: "Observation in-situ et questionnaires pour évaluer l'intégration de l'IA. Identification des points de friction (zapping, désorientation) et définition des limites strictes (zéro hallucination, maintien de l'humain).",
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: "Silent Sky Connect : Aéronautique & Ergonomie",
    category: "Évaluation Système Multimodal",
    description: "Évaluation d'un système de communication silencieuse en cockpit (tablette et veste haptique). Protocole sur simulateur Cessna avec eye-tracking, HRV et analyse psychométrique via NASA-TLX.",
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: "Jeux pour tous : Re-conception Inclusive du Triominos",
    category: "Accessibilité & Facteurs Humains",
    description: "Combat contre l'isolement social des aînés. Tests in-situ avec simulateurs de vieillissement (vision, motricité, cognitif) et refonte ergonomique des pièces, contrastes et règles du jeu.",
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: "Octotune : User-Centered Design & Team Synergy",
    category: "Management & Direction de Projet",
    description: "Direction et conception d'une application de gestion pour un club de musique. Animation de focus groups, prototypage sur Figma et management agile en inter-promotions.",
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: "Donator's App : UX Design & Redistribution Solidaire",
    category: "Design Thinking & Mobile App",
    description: "Conception d'une application mobile connectant donateurs et banques alimentaires en Afrique du Sud. Prototypage haute-fidélité et charte graphique respectant les normes WCAG.",
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    title: "Conversational Agent & Multi-Agent Onboarding",
    category: "IA Générative & Low-Code",
    description: "Automatisation et formation immersive via Microsoft Copilot Studio. Configuration multi-personas, ingénierie de prompts et traçabilité des arguments dans une base de données interne.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
  }
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

  // Récupération du projet actif au centre
  const activeProject = projectsData[currentIndex];

  // On prépare les 3 cartes à afficher
  const visibleSlides = [
    { project: projectsData[prevIndex], position: 'left' },
    { project: projectsData[currentIndex], position: 'center' },
    { project: projectsData[nextIndex], position: 'right' },
  ];

  return (
    <section className="showcase-carousel">
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

      {/* Bloc de description dynamique que vous aviez préparé dans le CSS */}
      <div className="project-details-container">
        <p className="details-description">{activeProject.description}</p>
      </div>
    </section>
  );
}