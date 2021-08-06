import { createAction } from '@ngrx/store';

export const sum = createAction(
  '[sum] sum two value',
  (payload: { valueA: number; valueB: number }) => ({ payload })
);
