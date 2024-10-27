export type TransactionType = 'invoice' | 'payment';

export interface Transaction {
  id: string;
  type: TransactionType;
  toFrom: string;
  details: string;
  amount: number;
  date: Date;
}

export interface FormData {
  type: TransactionType;
  toFrom: string;
  details: string;
  amount: string;
}

export interface FormErrors {
  toFrom?: string;
  details?: string;
  amount?: string;
}