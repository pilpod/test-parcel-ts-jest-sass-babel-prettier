import { Header } from './components/Header/Header';
import { WelcomePage } from './pages/Welcome/Welcome';
import { renderAboutPage } from './pages/About/about';
import { GridComponent } from './components/GridSection/GridComponent';


const app = () => {
    
    const headerComponent = new Header;
    const welcome = new WelcomePage;

    const btnHome = document.getElementById('home')!;
    const btnPhotoGallery = document.getElementById('photo-gallery')!;
    const btnAbout = document.getElementById('about')!;
    const btnContact = document.getElementById('contact')!;
    const content = document.getElementById('content')!;
    
    content.innerHTML = welcome.renderWelcomePage();
    const gridComponent = new GridComponent;


    btnHome.addEventListener('click', (e) => {
        content.innerHTML = welcome.renderWelcomePage();
        const gridComponent = new GridComponent;
    })

    btnAbout.addEventListener('click', () => {
        content.innerHTML = renderAboutPage();
    })
    
}

app();