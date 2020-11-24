import { Schema } from 'mongoose';

export const TokenSchema = new Schema({
    email:Schema.Types.String,          
    tokken:Schema.Types.String,
    expiresIn:Schema.Types.String

})