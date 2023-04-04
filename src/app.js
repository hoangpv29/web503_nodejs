import express from "express";
import cors from "cors";
import router from "./routes/index";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

export const viteNodeApp = app;

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
