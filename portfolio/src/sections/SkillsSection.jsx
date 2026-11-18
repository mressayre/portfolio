import './SkillsSection.css';
import TechMarquee from '../components/TechMarquee';

// Importe tes logos (mets tes icônes SVG/PNG dans ton dossier assets)
import reactLogo from '../assets/react.svg';
import pythonLogo from '../assets/python.svg';
import nodeLogo from '../assets/node.svg';
import figmaLogo from '../assets/figma.svg';
import githubLogo from '../assets/Vector.svg';
import dockerLogo from '../assets/docker.svg';
import postmanLogo from '../assets/postman.svg'
import copilotLogo from '../assets/microsoft-copilot.svg'
import makeLogo from '../assets/make.svg'
import ollamaLogo from '../assets/ollama.svg'
import langLogo from '../assets/langchain-wordmark.svg'
import n8nLogo from '../assets/n8n.svg'
import htmlLogo from '../assets/html.svg'
import cssLogo from '../assets/css.svg'
import sqlLogo from '../assets/sql.svg'
import azureLogo from '../assets/microsoft-azure.svg'
import canvaLogo from '../assets/canva.svg'




export default function SkillsSection() {
    // Liste 1 : Langages & Frameworks
    const languagesAndFrameworks = [
        { name: 'React', icon: reactLogo },
        { name: 'Python', icon: pythonLogo },
        { name: 'Node.js', icon: nodeLogo },
        { name: 'FastAPI', icon: pythonLogo },
        { name: 'C#', icon: pythonLogo },
        { name: 'HTML', icon: htmlLogo },
        { name: 'CSS', icon: cssLogo },
        { name: 'SQL', icon: sqlLogo },
        { name: 'SPARQL', icon: reactLogo },
        { name: 'Pydantic', icon: pythonLogo },
    ];

    // Liste 2 : Outils, Cloud & IA
    const toolsAndCloud = [
        { name: 'GitHub', icon: githubLogo },
        { name: 'Figma', icon: figmaLogo },
        { name: 'Docker', icon: dockerLogo },
        { name: 'n8n', icon: n8nLogo },
        { name: 'Make', icon: makeLogo },
        { name: 'Copilot Studio', icon: copilotLogo },
        { name: 'Postman', icon: postmanLogo },
        { name: 'Azure SQL / Key Vault', icon: azureLogo },
        { name: 'LangChain / LangGraph', icon: langLogo },
        { name: 'Ollama', icon: ollamaLogo },
        { name: 'MarkItDown', icon: pythonLogo },
        { name: 'Canvas', icon: canvaLogo}
    ];

    return (
        <section className='skills-section'>
            <div className='skills-part'>
                <h3>Compétences & Savoirs-être</h3>
                {/* Tu pourras structurer cette partie selon tes besoins */}
            </div>

            <div className='tools-part'>
                <div className="marquees-wrapper">
                    <p className="marquee-subtitle">Langages & Frameworks</p>
                    <TechMarquee items={languagesAndFrameworks} direction="left" />

                    <p className="marquee-subtitle" style={{ marginTop: '20px' }}>Outils, IA & Cloud</p>
                    <TechMarquee items={toolsAndCloud} direction="right" />
                </div>
            </div>
        </section>
    );
}