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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const bookTrial_route_1 = require("./routes/bookTrial.route");
const express_1 = __importDefault(require("express"));
const bodyParse = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
exports.app = express_1.default();
let port = process.env.PORT ? process.env.PORT : 3000;
exports.app.listen(port, () => {
    console.log('server started');
});
exports.app.use(bodyParse.urlencoded({ extended: false }));
exports.app.use(bodyParse.json());
exports.app.use(cors_1.default());
exports.app.use((req, res, next) => {
    console.log(req.url);
    next();
});
exports.app.get('/', (req, res, next) => {
    console.log(req.url);
    res.send('hello');
});
exports.app.use('/api', bookTrial_route_1.bookTrialRoute);