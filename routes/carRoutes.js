const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', (req, res) => {
  const { PlateNumber, CarType, CarSize, DriverName, PhoneNumber } = req.body;
  db.query(
    'INSERT INTO Car VALUES (?, ?, ?, ?, ?)',
    [PlateNumber, CarType, CarSize, DriverName, PhoneNumber],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send('Car added');
    }
  );
});

// READ
router.get('/', (req, res) => {
  db.query('SELECT * FROM Car', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// UPDATE
router.put('/:PlateNumber', (req, res) => {
  const { CarType, CarSize, DriverName, PhoneNumber } = req.body;
  db.query(
    'UPDATE Car SET CarType=?, CarSize=?, DriverName=?, PhoneNumber=? WHERE PlateNumber=?',
    [CarType, CarSize, DriverName, PhoneNumber, req.params.PlateNumber],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Car updated');
    }
  );
});

// DELETE
router.delete('/:PlateNumber', (req, res) => {
  db.query('DELETE FROM Car WHERE PlateNumber=?', [req.params.PlateNumber], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Car deleted');
  });
});

module.exports = router;