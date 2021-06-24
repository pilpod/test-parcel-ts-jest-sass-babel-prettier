import { Photo } from "../../ts/Models/Photo";
import { PhotoCard } from "../../components/PhotoCard/PhotoCard";
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
        let cardList = this.createCardList();

        const template = /* html */ `
            <section id="photo-gallery-title" class="photo-gallery-title">
                <h1 class="fs-1">Photo Gallery</h1>
            </section>
            <section id="photo-list" class="photo-list">
                ${cardList}
            </section>
        `

        return template;
    }

    showPhotoGalleryPage()
    {   
        this.repository.getAll();

        const content = document.getElementById('content') as HTMLBodyElement;
        content.innerHTML = this.createTemplate();
    }

    createCardList()
    {
        let cardList: string[];

        let photo = new Photo(1, 1, 'Hola Mundo', 'thumbnail', 'url')
        let photoCard = new PhotoCard(photo)
        return photoCard.createCard()
    }

}