import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { couponActions } from '../../store/shopping-cart/couponSlice';
import './styles.css';

const CartCoupon = () => {
  const coupons = useSelector((state) => state.coupon.coupons);
  const selectedCoupon = useSelector((state) => state.coupon.selectedCoupon);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(selectedCoupon?.id || null);

  const handleSelectCoupon = (id) => {
    setSelectedId(id);
    const selectedCoupon = coupons.find((coupon) => coupon.id === id);
    dispatch(couponActions.selectCoupon(selectedCoupon));
  };

  return (
    <div className='cart-coupon'>
      <h5>Apply Coupon</h5>
      <ul>
        {coupons.map((coupon) => (
          <li
            key={coupon.id}
            className={selectedId === coupon.id ? 'selected' : ''}
            onClick={() => handleSelectCoupon(coupon.id)}
          >
            {coupon.code} - {coupon.discount}% off
          </li>
        ))}
      </ul>
      {selectedCoupon && (
        <p className='selected-coupon'>
          Selected Coupon: {selectedCoupon.code} - {selectedCoupon.discount}%
          off
        </p>
      )}
    </div>
  );
};

export default CartCoupon;
