import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    email: Schema.Types.String,
    password: Schema.Types.Number
})