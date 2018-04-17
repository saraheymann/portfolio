var path = require("path");

module.exports = function(app) {
    
    app.get("/art", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/art.html"));
    });
  
    app.get("/contact", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };