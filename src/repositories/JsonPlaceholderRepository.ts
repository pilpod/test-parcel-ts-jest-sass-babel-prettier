import { IRepository } from '../repositories/IRepository';
import { JsonPlaceholderConnection } from './JsonPlaceholderConnection';

export class JsonPlaceholderRepository implements IRepository {

    private response : JsonPlaceholderConnection;
    private data : Array<Object> = [];

    constructor() {
        this.response = new JsonPlaceholderConnection;
    }

    listAll() : void {
        this.response.getData()
            .then(data => console.log(data))
            .catch((error) => {
                console.log(error)
            })        
    }



}