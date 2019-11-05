var path = require("path");


module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/main.html"));
  });

  app.get("/employee_input", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employee_input.html"));
  });

  app.get("/employer_input", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employer_input.html"));
  });

  app.get("/employer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html//employer.html"));
  });

  app.get("/employee", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html//employee.html"));
  });

  app.get("/contributors", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contributors.html"));
  });

  app.get("/add/employee", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employee-result.html"));
  });

  app.get("/add/jobs", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employeer-result.html"));
  });

  app.get("/employee/email", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employee_data.html"));
  });

  app.get("/employer/email", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employer_data.html"));
  });

  app.get("/employee/info", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employee_info.html"));
  });

  app.get("/employer/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/employer_one.html"));
  });

  app.get("/remove/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/remove.html"));
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};


