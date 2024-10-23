// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, subject, message } = req.body;

//     // Configurer Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // ou tout autre service comme Outlook, Yahoo, etc.
//       auth: {
//         user: emmaengongomo5@gmail/com, // Adresse e-mail d'envoi (dans ton fichier .env)
//         pass: process.env.EMAIL_PASS, // Mot de passe ou App Password (dans ton fichier .env)
//       },
//     });

//     try {
//       // Envoyer l'e-mail
//       await transporter.sendMail({
//         from: email,
//         to: process.env.EMAIL_USER, // L'adresse e-mail où tu souhaites recevoir le message
//         subject: `New contact form submission from ${name}: ${subject}`,
//         text: message,
//         html: `
//           <h1>New Message from ${name}</h1>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p>${message}</p>
//         `,
//       });

//       // Envoyer une réponse au client
//       return res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ message: 'Error sending email.' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
