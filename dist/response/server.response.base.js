"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponseBase = void 0;
const server_response_status_1 = require("./server.response.status");
class ServerResponseBase {
    constructor() {
        this.Status = server_response_status_1.ServerResponseStatus.Ok;
        this.Message = "";
    }
    Report(status, message = "") {
        this.Status = status;
        this.Message = message;
    }
}
exports.ServerResponseBase = ServerResponseBase;
