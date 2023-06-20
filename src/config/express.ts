import express from "express";
import router from "./routeconfig";

const app = express();

app.use(express.json());

app.use("/api/v1", router);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err.code == undefined) {
      err.code = 500;
    }

    return res.status(err.code).json({ message: err.message });
  }
);

export default app;
