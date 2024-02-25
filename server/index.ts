import express from "express";
import dotenv from "dotenv";
import path from "path";
import api from "./api";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const buildFolder = path.join(__dirname, "..", "build");

app.use(express.static(buildFolder));
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
