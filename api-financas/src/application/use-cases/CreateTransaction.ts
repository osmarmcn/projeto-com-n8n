
import type { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';
import { Transaction } from '../../domain/entities/Transaction';
import { randomUUID } from 'crypto';
import { sendToN8n } from '../../infrastructure/services/webhookService';

export class CreateTransaction {
  constructor(private repo: ITransactionRepository) {}

  async execute(data: {
    title: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
  }) {
    const transaction = new Transaction(
        randomUUID(),
        data.title,
        data.amount,
        data.type,
        data.category,
        new Date()
        );

    await this.repo.save(transaction);
    await sendToN8n(transaction)
    return transaction;
  }
}