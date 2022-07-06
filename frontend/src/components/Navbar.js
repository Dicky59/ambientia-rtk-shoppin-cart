import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingBag } from '../icons'

const Navbar = () => {
  const { cartTotalQty } = useSelector(state => state.cart)

  return (
    <header>
      <nav className='navbar'>
        <Link to='/'>
          <h2>Phone Shop</h2>
        </Link>
        <Link to='cart'>
          <div className='navBag'>
            <ShoppingBag />
            <div className='navQty'>
              <p>{cartTotalQty}</p>
            </div>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
