const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("GET Request Successful");
    })
    .post((req, res) => {
      res.send("POST request successful");
    });
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
