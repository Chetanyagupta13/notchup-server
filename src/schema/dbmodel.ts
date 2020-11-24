import { model, Document, Model, Schema } from 'mongoose';

export abstract class DBmodel<T extends Document> {
    private _dbmodel: Model<T>;

    public get getDBmodel():Model<T>{
        return this._dbmodel;
    }

    constructor(dbschema:Schema, collectionName:string) {
        this._dbmodel = model<T>(collectionName, dbschema);
    }
}