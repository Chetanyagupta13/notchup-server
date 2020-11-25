"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTrialRoute = void 0;
const bookTrial_controller_1 = require("../api/booktrial/bookTrial.controller");
const express_1 = __importDefault(require("express"));
exports.bookTrialRoute = express_1.default.Router();
let bookTrialController = new bookTrial_controller_1.BookTrialController();
exports.bookTrialRoute.post('/bookTrial', bookTrialController.bookTrial);
