
import type { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';

export class GetBalance {
  constructor(private repo: ITransactionRepository) {}

  async execute() {
    const transactions = await this.repo.findAll();

    let income = 0;
    let expense = 0;

    for (const t of transactions) {
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
    }

    return {
      income,
      expense,
      total: income - expense
    };
  }
}