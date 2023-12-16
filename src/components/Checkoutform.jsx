import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customfetch } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal,
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customfetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      const errorMessgage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order";
        toast.error(errorMessgage);
        if(error.response.status === 401 || 403) return redirect('/login')
        return null;
       }
  };
function Checkoutform() {
  return (
    <Form method="POST" className="flex flex-col gap-y-8">
      <h4 className="font-medium text-xl"> Shipping Information </h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
}

export default Checkoutform;
