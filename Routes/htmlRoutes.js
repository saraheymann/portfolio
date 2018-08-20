var path = require("path");
var nodemailer = require("nodemailer");

module.exports = function(app) {
    
    app.get("/art", function(req, res) {
      res.sendFile(path.join(__dirname, "../Public/art.html"));
    });
  
    app.get("/contact", function(req, res) {
      res.sendFile(path.join(__dirname, "../Public/contact.html"));
    });

    app.get("/news", function(req, res) {
      res.sendFile(path.join(__dirname, "../Public/news.html"));
    });

    app.get("/web", function(req, res) {
      res.sendFile(path.join(__dirname, "../Public/web.html"));
    });

    app.post('/contact', function (req, res) {
      let mailOpts, smtpTrans;
      smtpTrans = nodemailer.createTransport({
        host: 'mail.saraheymann.com',
        port: 465,
        secure: true,
        auth: {
          user: MAIL_USER,
          pass: MAIL_PASS
        }
      });
      mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: MAIL_USER,
        subject: 'New message from contact form',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
          res.render('contact-failure');
        }
        else {
          res.render('contact-success');
        }
      });
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../index.html"));
    });
  };