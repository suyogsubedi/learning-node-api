import { addNewContact } from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET Request Successful");
      }
    )
    .post(addNewContact);
  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("PUT REQUEST SUCCESSFUL");
    })
    .delete((req, res) => {
      res.send("DELETE REQUEST SUCCESSFUL");
    });
};
export default routes;
