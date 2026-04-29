
import { GetBalance } from './GetBalance';
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

describe('GetBalance', () => {
  it('should calculate balance correctly', async () => {
    const repo = new FakeRepository();

    // simulando dados
    await repo.save(new Transaction('1', 'Salário', 5000, 'income', 'job', new Date()));
    await repo.save(new Transaction('2', 'Aluguel', 2000, 'expense', 'home', new Date()));
    await repo.save(new Transaction('3', 'Freela', 1000, 'income', 'job', new Date()));

    const useCase = new GetBalance(repo);

    const result = await useCase.execute();

    expect(result).toEqual({
      income: 6000,
      expense: 2000,
      total: 4000
    });
  });
});