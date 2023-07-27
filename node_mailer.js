var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'balubadarla9515@gmail.com',
    pass: 'Google9515@'
  }
});

var mailOptions = {
  from: 'balubadarla9515@gmail.com',
  to: 'praneethguptha1198@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});