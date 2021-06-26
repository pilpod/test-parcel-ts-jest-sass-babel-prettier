export class CreatePhotoRequest {

    private albumId : number;
    private id : number;
    private title : string;
    private thumbnailUrl : string;
    private url : string;

    constructor(albumId:number, id: number, title: string, thumbnailUrl: string, url: string)
    {
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.url = url;
    }

    getAlbumId() : number
    {
        return this.albumId;
    }

    getId() : number
    {
        return this.id;
    }

    getTitle() : string
    {
        return this.title;
    }

    getThumbnailUrl() : string
    {
        return this.thumbnailUrl;
    }

    getUrl() : string
    {
        return this.url;
    }

}