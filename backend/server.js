import express from "express";
import path from "path";

const app = express();
app.use(express.static("frontend"));

app.get("/", (_, res) => {
  res.sendFile(path.resolve("frontend/index.html"));
});

app.listen(3000, () =>
  console.log("🔥 Elite Portfolio running on http://localhost:3000")
);
