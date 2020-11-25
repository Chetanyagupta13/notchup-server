"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const nodemailer = __importStar(require("nodemailer"));
class Mail {
    constructor() {
        this.mailOptions = {};
        this.toAddress = '';
        this.subject = '';
        this.message = '';
        this.transport = nodemailer.createTransport(({
            service: 'gmail',
            auth: {
                user: 'chetanyagupta13@gmail.com',
                pass: '@12345Chiko',
            }
        }));
    }
    intializeMail(toAddress, subject, message) {
        this.toAddress = toAddress;
        this.message = message;
        this.subject = subject;
        this.initMailOptions();
        this.sendMail();
    }
    initMailOptions() {
        this.mailOptions = {
            from: 'chetanyagupta13@gmail.com',
            to: this.toAddress,
            subject: this.subject,
            text: this.message,
        };
    }
    sendMail() {
        return this.transport.sendMail(this.mailOptions).then(() => {
            //console.log('email sent')
        }).catch((err) => {
            //console.log(err)
        });
    }
}
exports.Mail = Mail;
