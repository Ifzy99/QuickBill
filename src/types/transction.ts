export type TransactionType = 'invoice' | 'payment';

export type TransactionCategory = 
  | 'salary'
  | 'rent'
  | 'utilities'
  | 'supplies'
  | 'services'
  | 'other';

export interface Transaction {
  id: string;
  type: TransactionType;
  category: TransactionCategory;
  toFrom: string;
  details: string;
  amount: number;
  date: Date;
}