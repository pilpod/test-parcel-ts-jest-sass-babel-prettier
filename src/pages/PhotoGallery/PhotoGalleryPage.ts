import { Photo } from "../../ts/Models/Photo";
import { PhotoCard } from "../../components/PhotoCard/PhotoCard";
import { FormAddPhoto } from "../../components/Forms/FormAddPhoto";
import { IRepository } from "../../repositories/IRepository";

export class PhotoGalleryPage {

    private repository : IRepository;
    private formAddPhoto: FormAddPhoto;

    constructor( repository : IRepository ) {
        this.repository = repository;
        this.repository.getAll();
        this.formAddPhoto = new FormAddPhoto(this.repository);
    }

    render()
    {
        
    }

    createTemplate()
    {   

        const template = /* html */ `
            <section id="photo-gallery-title" class="photo-gallery-title">
                <h1 class="fs-1 mb-4">Photo Gallery</h1>
                <div id="form-photo-gallery"></div>
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
        this.formAddPhoto.render();
        this.createCardList();
    }

    createCardList()
    {   
        let photoList = document.getElementById('photo-list') as HTMLBodyElement;
        
        let list = this.repository.getAll();
        
        for (let index = 0; index < list.length; index++) {
            let photo = new Photo(list[index].albumId, list[index].id, list[index].title, list[index].thumbnail, list[index].url)
            let photoCard = new PhotoCard(photo);
            photoList.innerHTML += photoCard.createCard();
        }

    }

    

}