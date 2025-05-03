import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { couponActions } from '../../store/shopping-cart/couponSlice';
import './styles.css';

const groupLabels = {
  member: 'Member Coupons',
  shipping: 'Shipping Coupons',
  anonymous: 'Anonymous Coupons',
};

const CartCoupon = () => {
  const coupons = useSelector((state) => state.coupon.coupons);
  const selectedCoupons = useSelector((state) => state.coupon.selectedCoupons);
  const dispatch = useDispatch();

  // Group coupons by group
  const groupedCoupons = coupons.reduce((acc, coupon) => {
    acc[coupon.group] = acc[coupon.group] || [];
    acc[coupon.group].push(coupon);
    return acc;
  }, {});

  const handleSelectCoupon = (group, coupon) => {
    if (selectedCoupons[group] && selectedCoupons[group].id === coupon.id) {
      // Deselect if already selected
      dispatch(couponActions.selectCoupon({ group, coupon: null }));
      return;
    }
    dispatch(couponActions.selectCoupon({ group, coupon }));
  };

  return (
    <div className='cart-coupon'>
      <h5>Apply Coupon</h5>
      {Object.keys(groupedCoupons).map((group) => (
        <div key={group} style={{ marginBottom: '1rem' }}>
          <strong>{groupLabels[group] || group}</strong>
          <ul>
            {groupedCoupons[group].map((coupon) => (
              <li
                key={coupon.id}
                className={
                  selectedCoupons[group] &&
                  selectedCoupons[group].id === coupon.id
                    ? 'selected'
                    : ''
                }
                onClick={() => handleSelectCoupon(group, coupon)}
              >
                {coupon.code} - {coupon.discount}% off
              </li>
            ))}
          </ul>
          {/* {selectedCoupons[group] && (
            <p className='selected-coupon'>
              Selected: {selectedCoupons[group].code} -{' '}
              {selectedCoupons[group].discount}% off
            </p>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default CartCoupon;
