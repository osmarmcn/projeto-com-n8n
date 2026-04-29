
import type { ITransactionRepository } from '../../domain/repositories/ITransactionRepository';
import { Transaction } from '../../domain/entities/Transaction';
import { supabase } from '../database/supabaseClient';

export class SupabaseTransactionRepository implements ITransactionRepository {

  async save(transaction: Transaction): Promise<void> {
    await supabase.from('transactions').insert({
      ...transaction,
      createdAt: transaction.createdAt.toISOString()
    });
  }

  async findAll(): Promise<Transaction[]> {
    const { data } = await supabase
      .from('transactions')
      .select('*')
      .order('createdAt', { ascending: false });

    return data || [];
  }
}