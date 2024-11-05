import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

export const getExample = createSelector(
  [(state: RootState) => state.example],
  (example) => example,
);
