require('dotenv').config();
const tableService = require('../services/TableService');
tableService.tableId = process.env.LOGIN_TABLE_ID;
const express = require('express');

const router = express.Router();

router.get('/auth', (req, res) => {
  console.log(req.query)
  const { email, password } = req.query;
  if (!email || !password) {
      return res.status(400).json({ message: 'Не заполнены обязательные поля' });
  }

  console.log(email,password);
  
  tableService.get(process.env.LOGIN_TABLE_ID, `?filterByFormula=AND({Email}="${email}",{Password}="${password}")`)
      .then(req => req.data)
      .then(records => {
        console.log(records)
        if (records.total == 0){
          res.status(400).json({message: 'Пользователь не найден', userId:0 });
        } else
          res.status(200).json({message: 'Успешная авторизация', userId: records.records[0].fields.userId[0]});
      })
});

module.exports = router;