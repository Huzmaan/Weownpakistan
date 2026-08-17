import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
          } = body;

          if (!firstName || !lastName || !email || !message) {
            return new Response(
              JSON.stringify({
                success: false,
                message: "Please fill in all required fields.",
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          }

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env["GMAIL_USER"],
              pass: process.env["GMAIL_APP_PASSWORD"],
            },
          });

          await transporter.sendMail({
            from: process.env["GMAIL_USER"],
            to: process.env["CONTACT_RECEIVER"],
            replyTo: email,
            subject: `WOPF Contact Form: ${subject || "New Message"}`,
            text: `
New contact form submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}
            `,
          });

          return new Response(
            JSON.stringify({
              success: true,
              message: "Your message has been sent successfully.",
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {
          console.error("Contact form error:", error);

          return new Response(
            JSON.stringify({
              success: false,
              message: "Something went wrong. Please try again.",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      },
    },
  },
});