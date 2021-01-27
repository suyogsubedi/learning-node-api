import express, { response } from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

// We are passsing the app in our route finction which is in crmRoutes.js
routes(app);

app.get("/", (req, res) => {
  res.send(`Node and Express server running at port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Your Server is running on port ${PORT}`);
});
