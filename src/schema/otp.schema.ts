import { Schema } from 'mongoose';

export const OTPSchema = new Schema({
    email: Schema.Types.String,
    expiresIn: Schema.Types.String,
    otp: Schema.Types.String,
    status: {type:Schema.Types.String, default:'0'} , //0 for not used and 1 used. 
    createdAt: Schema.Types.String
})  