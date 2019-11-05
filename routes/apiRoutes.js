var db = require("../models");

module.exports = function (app) {
  
  app.get("/api/jobs/all", function (req, res) {
    db.Jobs.findAll({}).then(function (dbJobs) {
      res.json(dbJobs);
    });
  });

  app.get("/api/employee/all", function (req, res) {
    db.Employee.findAll({}).then(function (dbEmployees) {
      res.json(dbEmployees);
    });
  });

  app.post("/api/jobs/new", function (req, res) {
    
    console.log("New Jobs");
    console.log(req.body);

    db.Jobs.create(req.body).then(function(dbJob){
      res.json(dbJob);
    });
  });

  app.post("/api/employee/new", function (req, res) {
    
    console.log("New Employee");
    console.log(req.body);

    db.Employee.create(req.body).then(function(dbEmployee){
      res.json(dbEmployee);
    });
  });

  app.get("/api/employee/:email", function (req, res) {
    db.Employee.findAll({
      where: {
        email: req.params.email
      }
    }).then(function (dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.get("/api/employer/:email", function (req, res) {
    db.Jobs.findAll({
      where: {
        email: req.params.email
      }
    }).then(function (dbJob) {
      res.json(dbJob);
    });
  });

  

  app.delete("/api/remove/:id", function(req, res){
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee){
      res.json(dbEmployee);
    })
  })

  app.delete("/api/remove/employer/:id", function(req, res){
    db.Jobs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJob){
      res.json(dbJob);
    })
  })

  

  app.get("/api/employee/:id", function (req, res) {
    
    db.Employee.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbEmployee) {
      res.json(dbEmployee);
    });
  });


  
};
