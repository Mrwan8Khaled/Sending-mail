// index.js
require("dotenv").config();
const nodemailer = require("nodemailer");

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your email from .env
    pass: process.env.EMAIL_PASS, // your app password from .env
  },
});

// Define mail options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "receiver@example.com", // change to recipient
  subject: "Hello from Node.js Mailer 🚀",
  text: "This is a test email sent using Nodemailer.",
};

// Send email with error handling
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("❌ Error occurred:", error.message);
  } else {
    console.log("✅ Email sent successfully:", info.response);
  }
});
