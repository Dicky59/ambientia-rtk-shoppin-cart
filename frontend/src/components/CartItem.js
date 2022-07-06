import { useDispatch } from 'react-redux';
import {
  deleteFromCart,
  decrementCart,
  addToCart,
} from '../redux/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='cartItem'>
      <div className='cartItemProduct'>
        <img src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <button onClick={() => dispatch(deleteFromCart(item))}>Remove</button>
        </div>
      </div>
      <div className='cartItemPrice'>${item.price}</div>
      <div className='cartItemQty'>
        <button onClick={() => dispatch(decrementCart(item))}>-</button>
        <div className='cartItemQtyCount'>{item.cartQty}</div>
        <button onClick={() => dispatch(addToCart(item))}>+</button>
      </div>
      <div className='cartItemTotalPrice'>
        ${(item.price * item.cartQty).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
