export interface IRepository {

    getAll(): Array<Object>;

    create(photo: Array<any>): void;

}