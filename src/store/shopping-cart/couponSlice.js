import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coupons: [
    { id: 1, code: 'DISCOUNT10', discount: 10 },
    { id: 2, code: 'DISCOUNT20', discount: 20 },
    { id: 3, code: 'FREESHIP', discount: 0 },
  ],
  selectedCoupon: null,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    selectCoupon(state, action) {
      state.selectedCoupon = action.payload;
    },
  },
});

export const couponActions = couponSlice.actions;
export default couponSlice;
