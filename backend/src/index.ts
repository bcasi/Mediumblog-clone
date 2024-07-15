import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";

import mainRouter from "./routes/index";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api/v1", mainRouter);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
