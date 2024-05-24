import { createServer } from "http";
import app from "./app.js";
import connectDB from "./db/connect.js";

let server;

connectDB().then(() => {
  server = createServer(app);

  server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
});
