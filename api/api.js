const express = require("express");
const app = express();
const port = 3001;
const route = require("./routes/");
const cors = require("cors");
const errorHandler = require("./helpers/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", route);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
