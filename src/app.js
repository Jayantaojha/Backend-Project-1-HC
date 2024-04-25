import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN, credentials: true}))


// getting data from frontend - json, url and files (Images, pdf etc)
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

// to set or modify browser cookies in server
app.use(cookieParser());


export {app};