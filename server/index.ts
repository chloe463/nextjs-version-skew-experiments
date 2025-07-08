import express, { Express } from "express";
import { NextServer } from "next/dist/server/next";

import next from "next";

const { PORT = 3000, NODE_ENV } = process.env;
const dev = process.env.NODE_ENV !== "production";

export const ExpressServer = (nextApp: NextServer): Express => {
  const app = express();
  const handle = nextApp.getRequestHandler();

  app.all("/*", async (req, res) => {
    // return handle(req, res);
    try {
      return await handle(req, res);
      // return await handle(req as IncomingMessage, res as ServerResponse);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);
      return res.status(500).send({ error: err.toString() });
    }
  });

  return app;
};

console.log("start initializing app", { NODE_ENV, PORT });

const nextApp = next({ dev });

nextApp
  .prepare()
  .then(() => {
    const app = ExpressServer(nextApp);

    app.listen(PORT, () => {
      console.log(`listening on ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
