import { createReducer, on } from '@ngrx/store';
import { sum } from './sum.action';

export const initialState = 0;

const _sumReducer = createReducer(
  initialState,
  on(sum, (_, { payload }) => payload.valueA + payload.valueB)
);

export function sumReducer(state, action) {
  return _sumReducer(state, action);
}
