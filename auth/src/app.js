import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));
app.use(cors({ credentials: true, origin: "*" }));
app.use(cookieParser());

import studentMeRouter from "./routes/student/me.js";
import studentSignInRouter from "./routes/student/sign-in.js";
app.use(studentSignInRouter);
app.use(studentMeRouter);

app.get("/api/users/health", (req, res) => {
  res.send("Yay! It works!");
});

export default app;
