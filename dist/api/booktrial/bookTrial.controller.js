"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTrialController = void 0;
const mailer_1 = require("../../helper/mailer");
const api_response_handler_1 = require("../../handlers/api.response.handler");
class BookTrialController {
    constructor() {
        // this not working because need to bind.
        this.bookTrial = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let msg = `Dear ${body.parentName},\n${body.childName}'s class at ${body.slotTime} for ${body.course.course_name} has been successfully booked.`;
            this._mailer.intializeMail(body.parentEmail, 'NotchUp Trial Class Booked successfully', msg);
            body.booked = true;
            console.log(body);
            return new api_response_handler_1.ApiResponse(res, body)
                .withData(body)
                .withStatusCode(api_response_handler_1.HTTP_STATUS_CODE.OK)
                .build();
        });
        this._mailer = new mailer_1.Mail();
    }
}
exports.BookTrialController = BookTrialController;
