import { IRepository } from '../repositories/IRepository';
import { JsonPlaceholderConnection } from './JsonPlaceholderConnection';

export class JsonPlaceholderRepository implements IRepository {

    private data : JsonPlaceholderConnection;

    constructor() {
        this.data = new JsonPlaceholderConnection;
    }

    getAll() : Array<Object> {

        this.data.getData().then(data => console.log(data))

        return [{}];
    }

}