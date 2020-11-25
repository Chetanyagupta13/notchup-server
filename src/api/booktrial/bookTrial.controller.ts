import { Response, Request, NextFunction } from 'express';
import { Mail } from '../../helper/mailer';
import { ServerResponseStatus } from "../../response/server.response.status";
import { ApiResponse, HTTP_STATUS_CODE } from "../../handlers/api.response.handler";




export class BookTrialController{

    private _mailer;
    
    constructor(){
        this._mailer = new Mail();
    }
    // this not working because need to bind.
    public bookTrial = async(req:Request, res:Response, next:NextFunction)=>{
        let body:BookTrialItem = req.body;
        let msg:string = `Dear ${body.parentName},\n${body.childName}'s class at ${body.slotTime} for ${body.course.course_name} has been successfully booked.`;
        this._mailer.intializeMail(body.parentEmail, 'NotchUp Trial Class Booked successfully', msg);
        body.booked = true;
        console.log(body);
        return new ApiResponse<BookTrialItem>(res,body)
            .withData(body)
            .withStatusCode(HTTP_STATUS_CODE.OK)
            .build();
    }


}

interface BookTrialItem{
        course: Course,
        parentEmail: string,
        parentName: string,
        childName: string,
        slotTime: string,
        booked:boolean,
}

interface Course{
    course_id:number,
    course_name:string,
    slots:Slot[],
}
interface Slot{
    slot:string,
    instructor_count:number
}