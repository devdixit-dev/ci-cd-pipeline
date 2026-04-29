import express from "express";

export const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Home page"
  })
})

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok"
  });
});
