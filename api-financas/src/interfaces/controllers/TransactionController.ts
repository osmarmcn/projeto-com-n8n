
import type { Request, Response } from 'express';
import { CreateTransaction } from '../../application/use-cases/CreateTransaction';
import { ListTransactions } from '../../application/use-cases/ListTransactions';
import { GetBalance } from '../../application/use-cases/GetBalance';

export class TransactionController {
  constructor(
    private createTransaction: CreateTransaction,
    private listTransactions: ListTransactions,
    private getBalance: GetBalance
  ) {}

  async create(req: Request, res: Response) {
    const result = await this.createTransaction.execute(req.body);
    return res.json(result);
  }

  async list(req: Request, res: Response) {
    const result = await this.listTransactions.execute();
    return res.json(result);
  }

  async balance(req: Request, res: Response) {
    const result = await this.getBalance.execute();
    return res.json(result);
  }
}