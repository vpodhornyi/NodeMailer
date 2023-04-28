import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import Mailer from "./services/Mailer.js";
import ErrorHandler from "./services/ErrorHandler.js";

const PORT = process.env.PORT;

class Server {
  errorHandler = new ErrorHandler();
  mailer = new Mailer();

  constructor(port, app) {
    this.port = port;
    this.app = app;
    this.app.use(bodyParser.json());
    this.core();
    this.app.use(this.errorHandler.setServerErrors);
    this.listen();
  }

  core() {
    this.app.post('/send', async (req, res, next) => {
      try {
        const data = req.body;
        const answer = await this.mailer.send(data);
        res.json({messageId: answer.messageId});

      } catch (err) {
        next(err);
      }
    })
  }

  listen() {
    this.app.listen(this.port, () => console.log(`Server listening on port ${this.port}`))
  }
}

new Server(PORT, express());

