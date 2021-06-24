import { Photo } from "../../ts/Models/Photo"

export class PhotoCard {

    private photo: Photo;

    constructor(photo: Photo)
    {
        this.photo = photo;
    }

    createCard() {
        let template: string = /* html */ `
        <div class="card" style="width: 18rem;">
            <img src="${this.photo.getThumbnailUrl()}" class="card-img-top" alt="${this.photo.getTitle()}">
            <div class="card-body">
                <p class="card-text">${this.photo.getTitle()}</p>
            </div>
        </div>`

        return template;
    }

}