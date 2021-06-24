import { IRepository } from "../../repositories/IRepository";

export class PhotoGalleryPage {

    private repository : IRepository;

    constructor( repository : IRepository ) {
        this.repository = repository;
    }

    render()
    {
        
    }

    createTemplate()
    {
        const template = /* html */ `
        <section id="photo-gallery-title" class="photo-gallery-title">
            <h1 class="fs-1">Photo Gallery</h1>
        </section>
        `

        return template;
    }

    showPhotoGalleryPage()
    {   
        this.repository.listAll();

        const content = document.getElementById('content') as HTMLBodyElement;
        content.innerHTML = this.createTemplate();
    }

}