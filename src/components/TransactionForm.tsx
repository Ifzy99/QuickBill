import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, DollarSign } from 'lucide-react';
import { FormData, FormErrors, Transaction } from '../types/transaction';
import { validateForm } from '../utils/validators';

interface Props {
  onSubmit: (transaction: Transaction) => void;
}

export const TransactionForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    type: 'invoice',
    category:'other',
    toFrom: '',
    details: '',
    amount: '',
    date:'',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newTransaction: Transaction = {
      id: Math.random().toString(36).substring(2, 9),
      type: formData.type,
      category:formData.category,
      toFrom: formData.toFrom,
      details: formData.details,
      amount: parseFloat(formData.amount),
      date: new Date(),
    };

    onSubmit(newTransaction);
    setFormData({ type: 'invoice', category:'other', toFrom: '', details: '', amount: '', date:'' });
    setErrors({});
  };

  return (
    <Card className="max-w-2xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-slate-800">
          QuickBill Finance Logger
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Transaction Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value: any) => 
                  setFormData(prev => ({ ...prev, type: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="invoice">Invoice</SelectItem>
                  <SelectItem value="payment">Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="toFrom">To / From</Label>
              <Input
                id="toFrom"
                value={formData.toFrom}
                onChange={(e) => 
                  setFormData(prev => ({ ...prev, toFrom: e.target.value }))
                }
                placeholder="Enter name"
                className={errors.toFrom ? 'border-red-500' : ''}
              />
              {errors.toFrom && (
                <p className="text-red-500 text-sm">{errors.toFrom}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Details</Label>
            <Input
              id="details"
              value={formData.details}
              onChange={(e) => 
                setFormData(prev => ({ ...prev, details: e.target.value }))
              }
              placeholder="Enter transaction details"
              className={errors.details ? 'border-red-500' : ''}
            />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => 
                  setFormData(prev => ({ ...prev, amount: e.target.value }))
                }
                className={`pl-10 ${errors.amount ? 'border-red-500' : ''}`}
                placeholder="0.00"
                step="0.01"
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
