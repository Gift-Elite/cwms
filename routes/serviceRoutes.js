// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { ServiceDate, PlateNumber, PackageNumber } = req.body;
  db.query(
    'INSERT INTO ServicePackage (ServiceDate, PlateNumber, PackageNumber) VALUES (?, ?, ?)',
    [ServiceDate, PlateNumber, PackageNumber],
    () => res.send('Service added')
  );
});

router.get('/', (req, res) => {
  db.query(`
    SELECT sp.*, c.DriverName, p.PackageName 
    FROM ServicePackage sp
    JOIN Car c ON sp.PlateNumber = c.PlateNumber
    JOIN Package p ON sp.PackageNumber = p.PackageNumber
  `, (err, results) => res.json(results));
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM ServicePackage WHERE RecordNumber=?', [req.params.id], () => {
    res.send('Deleted');
  });
});

module.exports = router;