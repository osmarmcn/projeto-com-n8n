
import { CreateTransaction } from './CreateTransaction';
import { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';

class FakeRepository implements ITransactionRepository {
  transactions: any[] = [];

  async save(transaction: any): Promise<void> {
    this.transactions.push(transaction);
  }

  async findAll(): Promise<any[]> {
    return this.transactions;
  }
}

describe('CreateTransaction', () => {
  it('should create a transaction', async () => {
    const repo = new FakeRepository();
    const useCase = new CreateTransaction(repo);

    const result = await useCase.execute({
      title: 'Teste',
      amount: 100,
      type: 'income',
      category: 'test'
    });

    expect(result).toHaveProperty('id');
    expect(repo.transactions.length).toBe(1);
  });
});