import { FormData, FormErrors } from '../types/transction';

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.toFrom.trim()) {
    errors.toFrom = 'Name is required';
  }

  if (!data.details.trim()) {
    errors.details = 'Details are required';
  }

  const amount = parseFloat(data.amount);
  if (isNaN(amount) || amount <= 0) {
    errors.amount = 'Please enter a valid amount';
  }

  return errors;
};