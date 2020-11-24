import { BookTrialController } from '../api/booktrial/bookTrial.controller';
import express from 'express';


export const bookTrialRoute = express.Router();


let bookTrialController = new BookTrialController();


bookTrialRoute.post('/bookTrial', bookTrialController.bookTrial);