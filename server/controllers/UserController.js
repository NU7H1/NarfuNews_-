require('dotenv').config();
const tableService = require('../services/TableService');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    tableService._get(process.env.USER_TABLE_ID)
    .then(req=> req.data)
    .then(records=> res.json(records))
});
module.exports = router;