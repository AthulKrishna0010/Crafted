require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
app.use(express.json());
app.use(cors());

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/contact", async (req, res) => {
  const { name, email, phone, projectType, plan, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  if (projectType === "Other" && (!message || !message.trim())) {
    return res
      .status(400)
      .json({ error: "Message is required for 'Other' project type" });
  }

  const msg = {
    to: process.env.TO_EMAIL, // your verified sender or recipient
    from: process.env.TO_EMAIL, // your verified sender (must match what you verified in SendGrid)
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
    await sgMail.send(msg);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
