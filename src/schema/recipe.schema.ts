import { Ingredient } from './../items/ingredient';
import { Schema } from 'mongoose';

export  const RecipeSchema = new Schema({
    name: Schema.Types.String,
    decs: Schema.Types.String,
    imageURL: Schema.Types.String,
    ingredient: {
        name: Schema.Types.String,
        amount: Schema.Types.Number,
        id: Schema.Types.String,
    },
})


    