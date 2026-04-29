
import { Router } from 'express';
import { TransactionController } from '../controllers/TransactionController';
import { validateTransaction } from '../middlewares/validateTransaction';

export function transactionRoutes(controller: TransactionController) {
  const router = Router();

  router.post('/transactions', validateTransaction, (req, res) => controller.create(req, res));
  router.get('/transactions', (req, res) => controller.list(req, res));
  router.get('/balance', (req, res) => controller.balance(req, res));

  return router;
}