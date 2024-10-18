import express, { json } from "express";
import { config } from "./config";
import cors from "cors";
import StudentsRoutes from "./routes/students.route";
import CommentsRouter from "./routes/comments.route";

const { port, host } = config?.server;
const app = express();
app.use(cors());
app.use(json());

app.use("/comments", CommentsRouter);

export const server = async () => {
  return new Promise((resolve, reject) => {
    app.listen(port, host, () => {
      console.info(`Server running at http://${host}:${port}`);
      resolve(true);
    });
  });
};
