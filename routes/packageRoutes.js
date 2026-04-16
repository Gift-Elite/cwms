// routes/packageRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Package', (err, results) => res.json(results));
});

router.post('/', (req, res) => {
  const { PackageName, PackageDescription, PackagePrice } = req.body;
  db.query(
    'INSERT INTO Package (PackageName, PackageDescription, PackagePrice) VALUES (?, ?, ?)',
    [PackageName, PackageDescription, PackagePrice],
    () => res.send('Package added')
  );
});

router.put('/:id', (req, res) => {
  const { PackageName, PackageDescription, PackagePrice } = req.body;
  db.query(
    'UPDATE Package SET PackageName=?, PackageDescription=?, PackagePrice=? WHERE PackageNumber=?',
    [PackageName, PackageDescription, PackagePrice, req.params.id],
    () => res.send('Updated')
  );
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM Package WHERE PackageNumber=?', [req.params.id], () => {
    res.send('Deleted');
  });
});

module.exports = router;