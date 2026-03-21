require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Simple API route
app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Get all questions with their replies
app.get('/api/questions', (req, res) => {
  db.query(
    `SELECT q.*, r.id AS reply_id, r.reply, r.username AS reply_user, r.created_at AS reply_time
     FROM questions q
     LEFT JOIN replies r ON q.id = r.question_id
     ORDER BY q.created_at DESC, r.created_at ASC`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      // Group replies under their questions
      const questions = {};
      results.forEach(row => {
        if (!questions[row.id]) {
          questions[row.id] = {
            id: row.id,
            username: row.username,
            question: row.question,
            created_at: row.created_at,
            replies: []
          };
        }
        if (row.reply_id) {
          questions[row.id].replies.push({
            id: row.reply_id,
            username: row.reply_user,
            reply: row.reply,
            created_at: row.reply_time
          });
        }
      });
      res.json(Object.values(questions));
    }
  );
});

// Post a new question
app.post('/api/questions', (req, res) => {
  const { username, question } = req.body;
  db.query(
    'INSERT INTO questions (username, question) VALUES (?, ?)',
    [username, question],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, username, question });
    }
  );
});

// Post a reply
app.post('/api/replies', (req, res) => {
  const { question_id, username, reply } = req.body;
  db.query(
    'INSERT INTO replies (question_id, username, reply) VALUES (?, ?, ?)',
    [question_id, username, reply],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, question_id, username, reply });
    }
  );
});
