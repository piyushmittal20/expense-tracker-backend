const express = require('express');

const router = express.Router();

const transactionController = require('../controllers/transaction');

router.get('/', transactionController.getTransactions);

router.post('/', transactionController.addTransactions);

router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;