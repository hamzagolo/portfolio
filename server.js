const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

/* 
   MIDDLEWARE
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* 
   SERVE PORTFOLIO*/

app.use(express.static(path.join(__dirname)));

/* 
   POSTGRESQL CONNECTION
 */

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

/* 
   TEST DATABASE CONNECTION
*/

pool
  .connect()
  .then((client) => {
    console.log("PostgreSQL connected successfully.");

    client.release();
  })
  .catch((error) => {
    console.error("PostgreSQL connection error:", error.message);
  });

/* 
   CONTACT FORM
 */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* 
           VALIDATION
         */

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    if (name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      });
    }

    if (email.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    if (message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    /* 
           INSERT INTO POSTGRESQL
        */

    const result = await pool.query(
      `
            INSERT INTO contact_messages
            (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, message, created_at
            `,
      [name.trim(), email.trim(), message.trim()],
    );

    /* 
           SUCCESS RESPONSE
         */

    res.status(201).json({
      success: true,

      message: "Your message has been sent successfully.",

      data: result.rows[0],
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,

      message: "Something went wrong. Please try again later.",
    });
  }
});

/* 
   GET CONTACT MESSAGES
 */

/*
   This lets us check the messages
   stored in PostgreSQL.

   Later we should protect this route
   with authentication.
*/

app.get("/api/contact-messages", async (req, res) => {
  try {
    const result = await pool.query(
      `
            SELECT
                id,
                name,
                email,
                message,
                created_at
            FROM contact_messages
            ORDER BY created_at DESC
            `,
    );

    res.json({
      success: true,

      messages: result.rows,
    });
  } catch (error) {
    console.error("Error retrieving messages:", error);

    res.status(500).json({
      success: false,

      message: "Unable to retrieve messages.",
    });
  }
});

/* 
   START SERVER
 */

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
