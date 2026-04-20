import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Save to DB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // ✅ Mail setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 1. Mail to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 🔥 2. AUTO-REPLY to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me 💙",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out! I received your message.</p>
        <p>I’ll get back to you soon 😊</p>
        <br/>
        <p>– Ann</p>
      `,
    });

    res.status(200).json({ message: "Message sent & saved" });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;