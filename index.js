import express, { response } from "express";
import routes from "./src/routes/crmRoutes";
// import mongoose
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// Mongoose connection
// The following line suggests that we will be waiting for the result while connecting
mongoose.Promise = global.Promise;

// The following line helps to connect with the db
mongoose.connect("mongodb://localhost/CRMdb", {
  // They are going to depreciate this code block in the future so you need to write this

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// We are passsing the app in our route function which is in crmRoutes.js
routes(app);

app.get("/", (req, res) => {
  res.send(`Node and Express server running at port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Your Server is running on port ${PORT}`);
});
