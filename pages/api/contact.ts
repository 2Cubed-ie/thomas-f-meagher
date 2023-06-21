// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email?: string
  message: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import nodemailer from "nodemailer";

const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const formValues = req.body;
    
    // Server-side form validation
    if (
      !formValues.userEmail
    )
      return res
        .status(400)
        .json({ message: "Failed: Missing Required Values" });
    try {
      // Validate email and send form values to the validated email
      await transporter.sendMail({
        from: email,
        to: email,
        text: `
        Email: ${formValues.userEmail}
        Message: get the Protocol for the national flag`,
        subject: 'the Protocol for the national flag'
      });
      return res
        .status(200)
        .json({ message: "Success: Message sent" });
    } catch (error) {
      return res.status(400).json({
        message: `Failed: ${error}`,
      });
    }
  }
}