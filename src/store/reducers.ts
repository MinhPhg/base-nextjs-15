import { combineReducers } from '@reduxjs/toolkit';

import { slice } from '@/store/example/slice';

const rootReducer = combineReducers({
  example: slice.reducer,
});

export default rootReducer;
