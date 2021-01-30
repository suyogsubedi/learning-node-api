import {
  addNewContact,
  getContact,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from : ${req.originalUrl}`);
      console.log(`Request Type: ${req.method}`);
      next();
    }, getContact)
    // POST ENDPOINT
    .post(addNewContact);
  app
    .route("/contact/:contactID")
    // GET  A SPECIFIC CONTACT
    .get(getContactWithID)
    // UPDATING A SPECIFIC CONTACT
    .put(updateContact)
    // DELETING A SPECIFIC CONTACT
    .delete(deleteContact);
};
export default routes;
