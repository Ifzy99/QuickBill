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

export interface FormData {
    type: TransactionType;
    category: TransactionCategory;
    toFrom: string;
    details: string;
    amount: string;
    date: string;
}

export interface FormErrors {
    type?: string;
    category?: TransactionCategory;
    toFrom?: string;
    details?: string;
    amount?: string;
    date?: string;
}

export interface FilterOptions {
  type: TransactionType | 'all';
  category: TransactionCategory | 'all';
  sortBy: string;
  sortOrder: 'asc' | 'desc' | '';
  search: string;
}
