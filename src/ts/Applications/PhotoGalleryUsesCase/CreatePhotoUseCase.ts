import { IRepository } from "../../../repositories/IRepository";
import { CreatePhotoRequest } from "./CreatePhotoRequest";

export class CreatePhotoUseCase {
    
    private repository: IRepository;

    constructor(repository: IRepository)
    {
        this.repository = repository;
    }

    handle( createPhotoRequest: CreatePhotoRequest )
    {
        
    }

}