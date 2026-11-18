import './LinkButton.css'

export default function LinkButton({ media, logoLink, url}) {

    return(
        <div className='LinkButton' id={media}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={logoLink} alt={media}/>
            </a>
        </div>
    )
}