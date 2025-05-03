import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coupons: [
    { id: 1, code: 'DISCOUNT10', discount: 10, group: 'member' },
    { id: 2, code: 'DISCOUNT20', discount: 20, group: 'member' },
    { id: 3, code: 'FREESHIP', discount: 0, group: 'shipping' },
    { id: 4, code: 'ANON5', discount: 5, group: 'anonymous' },
  ],
  selectedCoupons: {}, // { group: coupon }
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    selectCoupon(state, action) {
      const { group, coupon } = action.payload;
      state.selectedCoupons[group] = coupon;
    },
  },
});

export const couponActions = couponSlice.actions;
export default couponSlice;
