// To download (npm i nodemailer)
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "",  // your email
    pass: "", // your password
  },
});

const mailOptions = {
  from: "",       // Your email
  to: '',        // the person you will send to him (email)
  subject: '',  // Write the title here
  text: '',    // Write what you want
};


// Error handling
transporter.sendMail(mailOptions, (error, info) => { 
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
