import { WelcomePage } from "../../pages/Welcome/Welcome";
import { GridComponent } from "../GridSection/GridComponent";

export class Header {

    private title:string;
    private links:string[];
    private section:HTMLElement;

    constructor()
    {
        this.title = 'Galeria de imagenes';
        this.links = [ 'Home', 'Photo Gallery', 'About', 'Contact'];
        this.section = document.getElementById('header')!;
        this.render();
    }

    render()
    {
        this.section.innerHTML = this.createTemplate();
    }

    createTemplate()
    {
        const template = /*html*/
        `
        <header class="p-5 mt-4 mb-4 bg-light rounded-3">
            <h1 class="fs-1">${this.title}</h1>
            <ul>
                <li id="home" class="btn btn-primary btn-navBar" title="home">${this.links[0]}</li>
                <li id="photo-gallery" class="btn btn-primary btn-navBar" title="photo-gallery">${this.links[1]}</li>
                <li id="about" class="btn btn-primary btn-navBar" title="about">${this.links[2]}</li>
                <li id="contact" class="btn btn-primary btn-navBar" title="about">${this.links[3]}</li>
            </ul>
        </header>
        `;

        return template;
    }

    showWelcomePage(welcome: WelcomePage, gridComponent: GridComponent, content: HTMLElement )
    {
            content.innerHTML = welcome.renderWelcomePage();
            gridComponent = new GridComponent;
            console.log('hola desde header')
    }

    showContactPage()
    {
        const btnContact = document.getElementById('contact')!;
    }

}