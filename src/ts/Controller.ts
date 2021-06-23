import { GridComponent } from "../components/GridSection/GridComponent";
import { Header } from "../components/Header/Header";
import { WelcomePage } from "../pages/Welcome/Welcome";
import { renderAboutPage } from "../pages/About/about";
import { ContactPage } from "../pages/Contact/ContactPage";
import { PhotoGalleryPage } from "../pages/PhotoGallery/PhotoGalleryPage";
import { IRepository } from "../repositories/IRepository";
import { JsonPlaceholderRepository } from "../repositories/JsonPlaceholderRepository";

export class Controller {

    private header: Header;
    private welcome: WelcomePage;
    private contactPage: ContactPage;
    private photoGalleryPage: PhotoGalleryPage;
    private repository : IRepository;

    constructor()
    {
        this.header = this.createHeader();
        this.welcome = this.createWelcomePage();
        this.contactPage = this.createContactPage();

        this.repository = new JsonPlaceholderRepository;
        this.photoGalleryPage = this.createPhotoGalleryPage();

        this.render();
    }

    render()
    {
        this.index();
        this.photoGallery();
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
        
        btnContact.addEventListener('click', () => {
            this.contactPage.showContactPage();
        })
    }

    photoGallery()
    {
        const btnPhotoGallery = document.getElementById('photo-gallery') as HTMLBodyElement;

        btnPhotoGallery.addEventListener('click', () => {
            console.log('galeria de fotos')
            this.photoGalleryPage.showPhotoGalleryPage();
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

    createContactPage()
    {
        return new ContactPage;
    }

    createPhotoGalleryPage()
    {
        return new PhotoGalleryPage(this.repository);
    }

}