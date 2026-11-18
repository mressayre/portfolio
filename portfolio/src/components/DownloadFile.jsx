import './LinkButton.css'
import downloadLogo from '../assets/ab-download-manager.svg'

export default function DownloadFile() {
 const handleDownload = () => {
   fetch('/A4 - 1 (1)_A4 - 2_merged.pdf', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/pdf',
     },
   })
     .then((response) => response.blob())
     .then((blob) => {
       const url = window.URL.createObjectURL(blob);
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'file.pdf');
       document.body.appendChild(link);
       link.click();
       link.parentNode.removeChild(link);
     })
     .catch((error) => console.error('Error downloading file:', error));
 };
 return (
   <button className='download-button'  onClick={handleDownload}>
        Download File <img className='logo' src={downloadLogo}></img>
    </button>
 );
};
