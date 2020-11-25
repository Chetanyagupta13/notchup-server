"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponse = void 0;
const server_response_base_1 = require("./server.response.base");
class ServerResponse extends server_response_base_1.ServerResponseBase {
    constructor(value) {
        super();
        this.Value = value;
    }
}
exports.ServerResponse = ServerResponse;
