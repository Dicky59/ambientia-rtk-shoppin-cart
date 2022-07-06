import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CornerUpLeft, ArrowLeft } from '../icons';
import CartItem from './CartItem';
import { clearCart, getTotals } from '../redux/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <main className='cartContainer'>
      <h1>Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <section className='cartEmpty'>
          <p>Your cart is empty</p>
          <div className='startShopping'>
            <Link to='/'>
              <CornerUpLeft />
              <span>Start shopping</span>
            </Link>
          </div>
        </section>
      ) : (
        <section>
          <div className='cartTitles'>
            <h3 className='productTitle'>Product</h3>
            <h3 className='price'>Price</h3>
            <h3 className='qty'>Qty.</h3>
            <h3 className='total'>Total</h3>
          </div>
          <div className='cartItems'>
            {cart.cartItems?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <hr />
          <div className='cartSummary'>
            <button className='cartClear' onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <div className='cartCheckout'>
              <div className='subtotal'>
                <span>Subtotal: </span>
                <span className='amount'>
                  ${cart.cartTotalPrice.toFixed(2)}
                </span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className='cartCheckoutBtn'>Checkout</button>
            </div>
          </div>
          <div className='continueShopping'>
            <Link to='/'>
              <ArrowLeft />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default Cart;
