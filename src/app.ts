import { Header } from './components/Header/Header';
import { renderWelcomePage } from './pages/Welcome/welcome';


const app = async () => {
    
    const headerComponent = new Header;

    const btnHome = document.getElementById('home')!;
    const btnPhotoGallery = document.getElementById('photo-gallery')!;
    const btnAbout = document.getElementById('about')!;
    const btnContact = document.getElementById('contact')!;
    const content = document.getElementById('content')!;
    
    content.innerHTML = renderWelcomePage();

    btnHome.addEventListener('click', (e) => {
        content.innerHTML = renderWelcomePage();
    })
    
}

app();