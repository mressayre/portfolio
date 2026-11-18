import './TechMarquee.css';

export default function TechMarquee({ items, direction = 'left' }) {
    return (
        <div className="marquee">
            <div className={`marquee-track ${direction}`}>
                {items.concat(items).map((item, index) => (
                    <div className="tech-badge" key={index}>
                        <img src={item.icon} alt={item.name} className="tech-icon" />
                        <span className="tech-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}