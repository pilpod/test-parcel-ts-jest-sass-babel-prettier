import { GridComponent } from "../components/GridSection/GridComponent";
import { Header } from "../components/Header/Header";
import { WelcomePage } from "../pages/Welcome/Welcome";
import { renderAboutPage } from "../pages/About/about";

export class Controller {

    private header: Header;
    private welcome: WelcomePage;

    constructor()
    {
        this.header = this.createHeader();
        this.welcome = this.createWelcomePage();

        this.render();
    }

    render()
    {
        this.index();
        this.about();
        this.contact();
    }

    index()
    {   
        const content = document.getElementById('content')!;
        const btnHome = document.getElementById('home')!;

        content.innerHTML = this.welcome.renderWelcomePage();
        const gridComponent: GridComponent = new GridComponent;

        btnHome.addEventListener('click', (e) => {
            this.header.showWelcomePage(this.welcome, gridComponent, content);
        })
    }

    about()
    {
        const btnAbout = document.getElementById('about') as HTMLBodyElement;
        const content = document.getElementById('content') as HTMLBodyElement;
        
        btnAbout.addEventListener('click', () => {
            content.innerHTML = renderAboutPage();
        })
    }

    contact()
    {
        const btnContact = document.getElementById('contact') as HTMLBodyElement;
        const content = document.getElementById('content') as HTMLBodyElement;
        
        btnContact.addEventListener('click', () => {
            content.innerHTML = 'Hello Contact Page';
        })

    }

    createHeader()
    {
        return new Header
    }

    createWelcomePage()
    {
        return new WelcomePage;
    }

}