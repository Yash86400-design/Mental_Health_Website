import express, { Application, Request, Response } from "express";

// Initializing the app
const app: Application = express();
const PORT: number = 3000;

// Defining a home route, let's see if it works or not
app.get("/", (req: Request, res: Response) => {
  res.send("Hello People!");
});

// PORT Listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
