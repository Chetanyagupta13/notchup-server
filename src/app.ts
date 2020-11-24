import { bookTrialRoute } from './routes/bookTrial.route';
import express from 'express';
import * as bodyParse from 'body-parser';
import cors from 'cors';

export const app = express();

app.listen(3000,()=>{
    console.log('server started');
});



app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})

app.use('/api', bookTrialRoute)








