import './Sections.css';
import LinkButton from '../components/LinkButton';
import DownloadFile from '../components/DownloadFile';

import linkedinLogo from '../assets/Group 1.svg';
import githubLogo from '../assets/Vector.svg';
import brainIcon from '../assets/brain-idea-mind-svgrepo-com.svg';
import chartIcon from '../assets/chart-svgrepo-com.svg';
import devIcon from '../assets/developer-centerpublic-api-svgrepo-com.svg';

export default function HeroSection() {
    return (
        <section id="hero-section">
            {/* PARTIE GAUCHE */}
            <div className="hero-left">
                <p id="greeting">Hi, I'm Melvin Ressayre</p>
                <div className="title-section">
                    <p id="title-1">I'm a passionate</p>
                    <p id="title-2">developer and UX/UI designer.</p>
                </div>
                <p className="hero-description">
                    I build services that are usable, accessible, and centered around human limits and needs.
                </p>
                <div className='links'>
                    <LinkButton 
                        media="linkedin" 
                        logoLink={linkedinLogo} 
                        url='https://www.linkedin.com/in/melvin-ressayre-12423b333' 
                    />
                    <LinkButton 
                        media="github" 
                        logoLink={githubLogo} 
                        url='https://github.com/mressayre' 
                    />
                </div>
                <div className="hero-cta">
                    <DownloadFile />
                </div>
            </div>

            {/* PARTIE DROITE : Le schéma Figma */}
            <div className="hero-right">
                {/* Ligne oblique traversant le centre */}
                <div className="diagonal-line"></div>

                {/* Le Grand Cercle central */}
                <div className="cognitive-circle">
                    
                    {/* Le Titre ancré à gauche du cercle */}
                    <div className="circle-badge-title">
                        <span>Cognitive engineering</span>
                    </div>

                    {/* Bulle 1 */}
                    <div className="orbit-item item-1">
                        <div className="orbit-icon"><img src={brainIcon} alt="Brain" /></div>
                        <div className="orbit-text">
                            <strong>Cognitive sciences & human factors</strong>
                            <p>Modélisation de la charge mentale, NASA-TLX et ergonomie.</p>
                        </div>
                    </div>

                    {/* Bulle 2 */}
                    <div className="orbit-item item-2">
                        <div className="orbit-icon"><img src={devIcon} alt="Dev" /></div>
                        <div className="orbit-text">
                            <strong>Computer sciences & development</strong>
                            <p>Architecture robuste, React, Python et applications fluides.</p>
                        </div>
                    </div>

                    {/* Bulle 3 */}
                    <div className="orbit-item item-3">
                        <div className="orbit-icon"><img src={chartIcon} alt="Chart" /></div>
                        <div className="orbit-text">
                            <strong>Data sciences & AI engineering</strong>
                            <p>Agents conversationnels, intégration RAG et analyse.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}