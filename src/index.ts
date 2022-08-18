import express from "express";
import Projects from "./api/projects";
import dotenv from "dotenv";

const app = express();
dotenv.config();
console.log(process.env);
app.use('/projects', Projects);
console.log(process.env.PORT);
app.listen(process.env.PORT || 4000, () => console.log('listening to port 4000'))