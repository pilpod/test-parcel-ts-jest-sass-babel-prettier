export class JsonPlaceholderConnection {

    private type : string = 'photos';
    private uri : string = 'https://jsonplaceholder.typicode.com/';

    constructor() {

    }

    async getAllData() {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(this.uri + this.type, config);
        let data = await response.json();
        return data;
    }
}