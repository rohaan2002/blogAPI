import express from "express";
import userRoutes from './Routes/user.routes.js'
const app = express();
import "dotenv/config";
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Its good" });
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/user", userRoutes)

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
