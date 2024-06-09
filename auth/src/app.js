import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));
app.use(cors({ credentials: true, origin: "*" }));
app.use(cookieParser());

import studentSignInRouter from "./routes/signin-student.js";
app.use(studentSignInRouter);

app.get("/api/users/health", (req, res) => {
  res.send("Yay! It works!");
});

export default app;
