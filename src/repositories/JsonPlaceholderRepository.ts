import { IRepository } from '../repositories/IRepository';
import { JsonPlaceholderConnection } from './JsonPlaceholderConnection';

export class JsonPlaceholderRepository implements IRepository {

    private response : JsonPlaceholderConnection;
    private data: any;

    constructor() {
        this.response = new JsonPlaceholderConnection;
    }

    requestData() : void {
        this.response.getAllData()
            .then(data => {
                this.createList(data);
            })
            .catch((error) => {
                console.log('Errors: ' + error)
            })
    }

    createList(data:any): void
    {
        let dataList = [];
        
        for (let index = 0; index < 10; index++) {
            dataList.push(data[index])
        }

        this.data = dataList;
    }

    getAll(): Array<Object>
    {
        this.requestData();
        
        return this.data;
    }



    





}