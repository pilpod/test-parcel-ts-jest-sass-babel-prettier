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

        const template = /* html */ `
            <section id="photo-gallery-title" class="photo-gallery-title">
                <h1 class="fs-1">Photo Gallery</h1>
            </section>
            <section id="photo-list" class="row row-cols-1 row-cols-md-3 mb-3 photo-list">
                
            </section>
        `
        return template;
    }

    showPhotoGalleryPage()
    {   
        const content = document.getElementById('content') as HTMLBodyElement;
        content.innerHTML = this.createTemplate();
        this.createCardList();
    }

    createCardList()
    {   
        let list = this.repository.getAll();

        let photoList = document.getElementById('photo-list') as HTMLBodyElement;

        for (let index = 0; index < list.length; index++) {
            let photo = new Photo(list[index].albumId, list[index].id, list[index].title, list[index].thumbnail, list[index].url)
            let photoCard = new PhotoCard(photo);
            photoList.innerHTML += photoCard.createCard();
        }

    }

}