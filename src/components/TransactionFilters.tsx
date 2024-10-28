import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TransactionType, TransactionCategory, FilterOptions } from '../types/transaction';


interface Props {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const TransactionFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
   
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Type</Label>
            <Select
              value={filters.type}
              onValueChange={(value) => 
                onFilterChange({ ...filters, type: value as TransactionType | 'all' })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="invoice">Invoice</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              value={filters.category}
              onValueChange={(value) => 
                onFilterChange({ ...filters, category: value as TransactionCategory | 'all' })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Salary">Salary</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectItem value="Investment">Investment</SelectItem>
                <SelectItem value="Rent">Rent</SelectItem>
                <SelectItem value="Utilities">Utilities</SelectItem>
                <SelectItem value="Groceries">Groceries</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Transportation">Transportation</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sort By</Label>
            <div className="flex space-x-2">
              <Select
                value={filters.sortBy}
                onValueChange={(value) => 
                  onFilterChange({ ...filters, sortBy: value as 'date' | 'amount' })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={filters.sortOrder}
                onValueChange={(value) => 
                  onFilterChange({ ...filters, sortOrder: value as 'asc' | 'desc' })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Descending</SelectItem>
                  <SelectItem value="asc">Ascending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:col-span-3">
            <Label>Search</Label>
            <Input
              type="text"
              placeholder="Search transactions..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};