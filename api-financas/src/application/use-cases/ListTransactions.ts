
import type { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';

export class ListTransactions {
  constructor(private repo: ITransactionRepository) {}

  async execute() {
    return await this.repo.findAll();
  }
}