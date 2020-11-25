"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponseStatus = void 0;
var ServerResponseStatus;
(function (ServerResponseStatus) {
    ServerResponseStatus[ServerResponseStatus["ConnectionError"] = -1] = "ConnectionError";
    ServerResponseStatus[ServerResponseStatus["Ok"] = 0] = "Ok";
    ServerResponseStatus[ServerResponseStatus["Error"] = 1] = "Error";
    ServerResponseStatus[ServerResponseStatus["Unauthorized"] = 2] = "Unauthorized";
    ServerResponseStatus[ServerResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
})(ServerResponseStatus = exports.ServerResponseStatus || (exports.ServerResponseStatus = {}));
