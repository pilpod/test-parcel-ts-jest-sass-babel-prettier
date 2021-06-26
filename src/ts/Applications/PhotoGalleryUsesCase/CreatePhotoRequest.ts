export class CreatePhotoRequest {

    private albumId : number;
    private id? : number | undefined;
    private title : string;
    private thumbnailUrl? : string | undefined;
    private url : string;

    constructor(albumId:number, title: string,  url: string, id?: number | undefined, thumbnailUrl?: string | undefined)
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

    getId() : number | undefined
    {
        return this.id;
    }

    getTitle() : string
    {
        return this.title;
    }

    getThumbnailUrl() : string | undefined
    {
        return this.thumbnailUrl;
    }

    getUrl() : string
    {
        return this.url;
    }

}