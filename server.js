import express from "express";

const app = express();
import "dotenv/config";
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Its good" });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
