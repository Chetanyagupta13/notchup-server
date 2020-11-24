import { injectable } from "inversify";
import { ServerResponseStatus } from "./server.response.status";


export abstract class ServerResponseBase { 

    public Status: ServerResponseStatus;
    public Message: string;

    protected constructor() { 
        this.Status = ServerResponseStatus.Ok;
        this.Message = "";
    }

    public Report(status: ServerResponseStatus, message: string = "") {
        this.Status = status;

        this.Message = message;
    }
}

