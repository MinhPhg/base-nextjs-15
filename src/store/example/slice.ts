import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {handleRequest} from '@/utils/funcs/asyncHandlers';

// state type
export type ExampleState = {
  keyName: string;
};

// payload type
export type UpdateExampleSlice = {
  newValue: string;
};

// init state
const initialState: ExampleState = {
  keyName: 'example',
};

// thunk action
const asyncExample = createAsyncThunk(
  'example/asyncAction',
  async (arg: any) => {
    const [res, error] = await handleRequest(
      Promise.resolve('ok') );
    if (error) return 'error';
    return 'success';
  }
);

// slice create
export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    updateExampleSlice: (
      state: ExampleState,
      action: PayloadAction<UpdateExampleSlice>
    ) => {
      state.keyName = action.payload.newValue;
    },
  },
  extraReducers(builder) {
    builder.addCase(asyncExample.fulfilled, (state, action) => {
      state.keyName = action.payload;
    });
  },
});

// normal flow action
export const exampleSliceActions = { ...slice.actions, asyncExample };

// export
export default slice.reducer;
