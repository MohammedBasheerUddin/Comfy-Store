import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customfetch } from "../utils";
import SectionTitle from "../components/SectionTitle";
import OrdersList from "../components/OrdersList";
import PaginationConatiner from "../components/PaginationConatiner";

export const  loader = (store) => async({request}) =>{
  const user = store.getState().userState.user;

  if(!user){
    toast.warm('You must be logged in to view orders');
    return redirect('/login');
  }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()],);
  try{
    const response = await customfetch.get('/orders', {params, headers:{
      Authorization: `Bearer ${user.token}`
    }
    })
    console.log(response)
    return {orders: response.data.data, meta:response.data.meta}
  } catch(error){
    const errorMessgage =
    error?.response?.data?.error?.message ||
    "There was an error in placing your order";
    toast.error(errorMessgage);
    if(error.response.status === 401 || 403) return redirect('/login')
    return null;
   }
}

function Orders() {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList/>
    </>
  )
}

export default Orders