import { Photo } from "../../ts/Models/Photo"

export class PhotoCard {

    private photo: Photo;

    constructor(photo: Photo)
    {
        this.photo = photo;
    }

    createCard() {
        let template: string = /* html */ `
        <div class="card mx-3 my-3" style="width: 18rem;">
            <img src="${this.photo.getUrl()}" class="card-img-top" alt="${this.photo.getId()}">
            <div class="card-body">
                <p class="card-text">${this.photo.getTitle()}</p>
            </div>
        </div>`

        return template;
    }

}