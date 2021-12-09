const express = require("express");
const userRouter = require("./Routers/user");
const imageRouter = require("./Routers/image");
const PORT = 5000;

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(PORT, () => console.log("Running in port 5000"));
