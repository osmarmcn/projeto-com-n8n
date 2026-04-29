
export type TransactionType = 'income' | 'expense';

export class Transaction {
  constructor(
    public id: string,
    public title: string,
    public amount: number,
    public type: TransactionType,
    public category: string,
    public createdAt: Date
  ) {}
}