import { IRepository } from "../../repositories/IRepository";
import { CreatePhotoRequest } from "../../ts/Applications/PhotoGalleryUsesCase/CreatePhotoRequest";
import { CreatePhotoUseCase } from "../../ts/Applications/PhotoGalleryUsesCase/CreatePhotoUseCase";

export class FormAddPhoto {

    private repository: IRepository;

    constructor(repository: IRepository)
    {
        this.repository = repository;
    }

    render()
    {
        const formPhotoGallery = document.getElementById('form-photo-gallery') as HTMLBodyElement;
        formPhotoGallery.innerHTML = this.createTemplate();
        this.prepareToAddPhoto();
    }

    createTemplate()
    {
        const template = /* html */ `
            <section id="form-add-photo" class="form-add-photo">
            <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="albumId" placeholder="AlbumId" name="albumId">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="title" placeholder="Title" name="title">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" id="url" placeholder="url" name="url">
                </div>
                <button id="btn-add-photo" type="submit" class="btn btn-primary">Submit</button>
            </form>
            </section>
        `

        return template;
    }

    prepareToAddPhoto() : any
    {
        const btnAddPhoto = document.getElementById('btn-add-photo') as HTMLBodyElement;
        const formControl = document.getElementsByClassName('form-control') as HTMLCollectionOf<any>;

        let photoValues: any = { "albumId": null, "title": '', "url": '' };

        btnAddPhoto.addEventListener('click', (event) => {
            event.preventDefault();

            for (let index = 0; index < formControl.length; index++) {
                if(formControl[index].name === 'albumId') { photoValues['albumId'] = formControl[index].value }
                if(formControl[index].name === 'title') { photoValues['title'] = formControl[index].value }
                if(formControl[index].name === 'url') { photoValues['url'] = formControl[index].value }
            }

            let request = new CreatePhotoRequest(photoValues["albumId"], photoValues["title"], photoValues["url"]);
            new CreatePhotoUseCase(this.repository).handle(request);
        })
    }

}