// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { AmountPaid, PaymentDate, RecordNumber } = req.body;
  db.query(
    'INSERT INTO Payment (AmountPaid, PaymentDate, RecordNumber) VALUES (?, ?, ?)',
    [AmountPaid, PaymentDate, RecordNumber],
    () => res.send('Payment added')
  );
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM Payment', (err, results) => res.json(results));
});

module.exports = router;