export class JsonPlaceholderConnection {

    private type : string = 'photos';
    private uri : string = 'https://jsonplaceholder.typicode.com/';

    constructor() {

    }

    async getData() {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(this.uri + this.type, config);
        let data : Promise<any> = await response.json();
        return data;
    }
}