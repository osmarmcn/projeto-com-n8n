
import { Router } from 'express';
import { transactionRoutes } from '../interfaces/routes/transactionRoutes';
import { SupabaseTransactionRepository } from '../infrastructure/repositories/SupabaseTransactionRepository';
import { CreateTransaction } from '../application/use-cases/CreateTransaction';
import { ListTransactions } from '../application/use-cases/ListTransactions';
import { GetBalance } from '../application/use-cases/GetBalance';
import { TransactionController } from '../interfaces/controllers/TransactionController';

export function setupRoutes() {
  const router = Router();

  const repo = new SupabaseTransactionRepository();

  const create = new CreateTransaction(repo);
  const list = new ListTransactions(repo);
  const balance = new GetBalance(repo);

  const controller = new TransactionController(create, list, balance);

  router.use(transactionRoutes(controller));

  return router;
}