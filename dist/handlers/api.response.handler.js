"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS_CODE = exports.ApiResponse = void 0;
const class_transformer_1 = require("class-transformer");
const server_response_1 = require("../response/server.response");
class ApiResponse extends server_response_1.ServerResponse {
    constructor(_response, value) {
        super(value);
        this._response = _response;
        this.statusCode = 200;
    }
    /**
     * Adds data to the Response object
     * @param data - Data object
     */
    withResData(content) {
        this.Value = content;
        // this.content = this;
        return this;
    }
    /**
     * Adds data to the Response object
     * @param data - Data object
     */
    withData(content) {
        this.content = content;
        return this;
    }
    /**
     * What status code should we return
     * @param statusCode - StatusCode
     */
    withStatusCode(statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    /**
   * What status code should we return
   * @param statusCode - StatusCode
   */
    withServiceStatus(serverStatus, mesage) {
        this.Report(serverStatus, mesage);
        return this;
    }
    /**
     * Creates a response object from a set of parameters
     * @returns Response object with the defined payload
     */
    build() {
        return this._response
            .status(this.statusCode)
            .type("json")
            .send(class_transformer_1.serialize(this, { enableCircularCheck: true, excludePrefixes: ["_"] }));
    }
}
exports.ApiResponse = ApiResponse;
/**
 * HTTP status codes from httpstatuses
 */
var HTTP_STATUS_CODE;
(function (HTTP_STATUS_CODE) {
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["CONTINUE"] = 100] = "CONTINUE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["OK"] = 200] = "OK";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["CREATED"] = 201] = "CREATED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["ACCEPTED"] = 202] = "ACCEPTED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NO_CONTENT"] = 204] = "NO_CONTENT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["FOUND"] = 302] = "FOUND";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["SEE_OTHER"] = 303] = "SEE_OTHER";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["USE_PROXY"] = 305] = "USE_PROXY";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["CONFLICT"] = 409] = "CONFLICT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["GONE"] = 410] = "GONE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["REQUEST_ENTITY_TOO_LARGE"] = 413] = "REQUEST_ENTITY_TOO_LARGE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HTTP_STATUS_CODE = exports.HTTP_STATUS_CODE || (exports.HTTP_STATUS_CODE = {}));
