import * as nodemailer from 'nodemailer';


export class Mail{

    private mailOptions = {};
    private transport;
    private toAddress: string='';
    private subject: string='';
    private message: string='';
    constructor(){
        this.transport = nodemailer.createTransport(({
            service:'gmail',
            auth:{
                user:'chetanya1466@gmail.com',
                pass:'Dr.driving',
            }
        }))
    }

    public intializeMail(toAddress: string, subject: string, message: string){
        this.toAddress = toAddress;
        this.message = message;
        this.subject = subject;
        this.initMailOptions();
        this.sendMail();
    }

    private initMailOptions(){
        this.mailOptions = {
            from:'chetanya1466@gmail.com',
            to:this.toAddress,
            subject:this.subject,
            text:this.message,
        }
    }
    public sendMail():Promise<any>{
        
        return this.transport.sendMail(this.mailOptions).then(()=>{
            //console.log('email sent')
        
        }).catch((err)=>{
            //console.log(err)
        })
    }


}

