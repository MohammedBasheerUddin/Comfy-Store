import { useSelector } from "react-redux"
import CartTotals from "../components/CartTotals"
import Checkoutform from "../components/Checkoutform"
import SectionTitle from "../components/SectionTitle"
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if(!user){
    toast.warn('Please login to continue checkout...')
    return redirect('/login');
  }
  return null;
}

function Checkout() {
  const cartTotal = useSelector(state => state.cartState.cartTotal);
  if(cartTotal === 0 ){
    return <SectionTitle text = {'Your cart is empty'} />
  }
  return (
    <>
      <SectionTitle text='Place your order' />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          <Checkoutform/>
          <CartTotals/>
      </div>
    </>
  )
}

export default Checkout