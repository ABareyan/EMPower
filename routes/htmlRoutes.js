var path = require("path");

var db = require("../models");

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


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};


