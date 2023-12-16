import { useSelector } from "react-redux"

function CartTotals() {
    const {cartTotal, shipping, tax, orderTotal} = useSelector(state => state.cartState);
  return (
    <div className="card bg-base-200 px-6 py-6">
        {/* CART TOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-3">
            <span>Subtotal</span>    
            <span className="font-medium">${cartTotal/100}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 mt-2">
            <span>Shipping</span>    
            <span className="font-medium">${shipping}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 mt-2">
            <span>Tax</span>    
            <span className="font-medium">${Math.round(tax)/100}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 mt-2">
            <span>Order Total</span>    
            <span className="font-medium">${Math.round(orderTotal)/100}</span>
        </p>
        
    </div>
  )
}

export default CartTotals