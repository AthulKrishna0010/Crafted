require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Setup transporter with your environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, phone, projectType, plan, message } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  if (projectType === "Other" && (!message || !message.trim())) {
    return res.status(400).json({ error: "Message is required for 'Other' project type" });
  }

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
      <p><strong>Preferred Plan:</strong> ${plan || "N/A"}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
