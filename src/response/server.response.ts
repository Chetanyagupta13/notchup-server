import { injectable } from "inversify";
import { ServerResponseBase } from "./server.response.base";
import { ServerResponseStatus } from "./server.response.status";


export abstract class ServerResponse<T> extends ServerResponseBase {

    public Value: T;

    public constructor(value: T) {
        super();
        this.Value = value;
    }
}
