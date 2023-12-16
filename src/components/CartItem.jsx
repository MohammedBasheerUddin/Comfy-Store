import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";

function CartItem({ cartItem }) {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  const dispatch = useDispatch();
  function removeItemFromCart (){
    dispatch(removeItem({cartID}));
  } 
  function handleAmount(e){
    dispatch(editItem({cartID, amount:parseInt(e.target.value)}))
  }
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-32 rouned-lg sm:h-32 sm:32 object-cover rounded"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">{company}</h4>
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-24">
        <div className="form-control max-w-xs">
            <label htmlFor="amount" className="label p-0">
                <span className="label-text">Amount</span>
            </label>
            <select name="amount" id="amount" value={amount} className="mt-2 select select-base select-bordered select-xs" onChange={handleAmount}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button className="mt-2 link link-primary link-hove text-sm" onClick={removeItemFromCart}>Remove</button>
        </div>
      </div>
      <p className="font-medium sm:ml-auto">${price/100}</p>
    </article>
  );
}

export default CartItem;
