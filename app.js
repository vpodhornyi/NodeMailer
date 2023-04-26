import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT;
const app = express();


app.get('/', (req, res) => {
  res.send("Hello world");
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
