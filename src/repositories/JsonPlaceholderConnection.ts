export class JsonPlaceholderConnection {

    private type : string = 'photos';
    private uri : string = 'https://jsonplaceholder.typicode.com/';

    constructor() {

    }

    async getData() {
        const response = await fetch(this.uri + this.type);
        return response;
    }
}