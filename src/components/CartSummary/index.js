import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(item => {
        total += item.quantity * item.price
      })
      let totalItems = 0
      cartList.forEach(item => {
        totalItems += item.quantity
      })
      return (
        <div className="summary-container">
          <h1 className="order-heading">
            Order Total: <span>Rs {total}/-</span>
          </h1>
          <p className="summary-item-count-para">{totalItems} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
