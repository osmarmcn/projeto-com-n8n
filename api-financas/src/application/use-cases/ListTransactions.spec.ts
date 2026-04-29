
import { ListTransactions } from './ListTransactions';
import { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';
import { Transaction } from '../../domain/entities/Transaction';

class FakeRepository implements ITransactionRepository {
  private transactions: Transaction[] = [];

  async save(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactions;
  }
}

describe('ListTransactions', () => {
  it('should return all transactions', async () => {
    const repo = new FakeRepository();

    const t1 = new Transaction('1', 'Teste', 100, 'income', 'test', new Date());
    const t2 = new Transaction('2', 'Teste2', 50, 'expense', 'test', new Date());

    await repo.save(t1);
    await repo.save(t2);

    const useCase = new ListTransactions(repo);

    const result = await useCase.execute();

    expect(result.length).toBe(2);
    expect(result).toEqual([t1, t2]);
  });
});