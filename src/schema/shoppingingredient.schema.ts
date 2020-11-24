import { Schema } from 'mongoose';

export const ShoppingIngredientSchema = new Schema({
    email:Schema.Types.String,
    ingredients:[{
        name: Schema.Types.String,
        amount: Schema.Types.String
    }]
})