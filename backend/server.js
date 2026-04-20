require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= MONGODB (ATLAS) ================= */
mongoose.connect(process.env.MONGO_URI, {
  dbName: "portfolioDB",
})
  .then(() => console.log("MongoDB Atlas connected ✅"))
  .catch(err => console.log("DB ERROR 👉", err));

/* ================= MODEL ================= */
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

// force collection name
const Contact = mongoose.model("Contact", contactSchema, "contacts");

/* ================= EMAIL SETUP ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= ROUTES ================= */

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Saving:", { name, email, message });

    /* ✅ SAVE TO DB */
    const saved = await new Contact({ name, email, message }).save();
    console.log("Saved in DB:", saved);

    /* ✅ EMAIL TO YOU ONLY */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // 👈 YOU
      subject: "New Contact Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("📧 Email sent to YOU");

    res.status(200).json({ message: "Success ✅" });

  } catch (error) {
    console.log("ERROR 👉", error);
    res.status(500).json({ error: "Something went wrong ❌" });
  }
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});