import express from "express";
import userRouter  from "./routes/userRouter";
const port = process.env.PORT || 3300;
import './db/db'

const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log("Server is running on port 3300");
});
