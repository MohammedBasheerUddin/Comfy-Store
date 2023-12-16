import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function CartItemList() {
  const cartItems = useSelector(state => state.cartState.cartItems)
  return (
    <>
    { cartItems.map(item => {
        return <CartItem key={item.cartID} cartItem={item} />
    })}
    </>
  )
}

export default CartItemList