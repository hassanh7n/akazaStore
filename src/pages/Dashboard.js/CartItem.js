import { formatPrice, generateAmountOptions } from '../../utils/helpers';
import { removeItem, editItem } from '../../features/Cart';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <Wrapper
      key={cartID}
      className='mb-12 '
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='cart-img'
      />
      {/* INFO */}
      <div className='sm'>
        {/* TITLE */}
        <h4 className='capitalize'>{title}</h4>
        {/* COMPANY */}
        <h5 className='capitalize'>
          {company}
        </h5>
        {/* COLOR
        <p className='flex'>
          color :
          <span
            className='badge'
            style={{ backgroundColor: productColor }}
          ></span>
        </p> */}
      </div>
      <div className='sm'>
        {/* AMOUNT */}
        <div className='control'>
          <label htmlFor='amount' className='label '>
            <span className='text'>Amount </span>
          </label>
          <select
            name='amount'
            id='amount'
            className='base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className='btn'
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className='font'>{price + "$"}</p>
    </Wrapper>
  );
};
export default CartItem;


const Wrapper = styled.main`
background-color: #D3D3D3;
margin-top : 2rem;
margin-bottom : 4rem;
/* margin-left : 1rem;
margin-right : 1rem; */
padding:2rem 2rem;
border-radius : 10px;
display : flex;
flex-direction : column;
width : 95%;
justify-content: space-between;
box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -webkit-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -moz-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);

.cart-img{
  width : 100%;
  height : auto;
  border-radius : 5px;
}
.capitalize{
  margin-top: 1rem;
}
@media (min-width: 520px) {
  flex-direction : row;
  .cart-img{
    width : 120px;
    height : 80px;
}
.capitalize{
  margin-top: 0rem;
}
  
}
`