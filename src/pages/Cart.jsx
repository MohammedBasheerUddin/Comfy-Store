import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CartItemList from "../components/CartItemList";
import CartTotals from "../components/CartTotals";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

function Cart() {
  const user = useSelector(state => state.userState.user); 
  const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);
  const dispatch = useDispatch();
  if(numItemsInCart === 0) {
    return <SectionTitle text ='Your cart is empty' />
  }
  function handleClear(){
    toast.success('Cart is now empty');
    dispatch(clearCart());
  }
  return (
    <>
        <SectionTitle text = 'Items in Your Cart'/>
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItemList />
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals />
            {user ? (<Link to='/checkout' className="btn btn-primary btn-block mt-8 capitalize"> proceed to checkout </Link>)
              : (<Link to='/login' className="btn btn-primary btn-block mt-8 capitalize"> Please login to continue.</Link>)
            }
            {numItemsInCart > 0 && <button onClick={handleClear} className="btn btn-primary btn-block mt-8 capitalize"> Clear Cart </button>}
          </div>
        </div>
    </>
  )
}

export default Cart;