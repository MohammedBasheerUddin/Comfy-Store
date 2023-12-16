import { Form, Link, redirect } from "react-router-dom"
import FormInput from "../components/FormInput"
import SubmitBtn from "../components/SubmitBtn"
import { customfetch } from "../utils";
import { toast } from 'react-toastify';


export async function action({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try{
    const response = await customfetch.post('/auth/local/register', data);
    toast.success('Account created successfully.')
    return redirect('/login')
  } catch(error){
    console.log(error)
    const errorMessgage = error?.response?.data?.error?.message || 'Please check your input again';
    toast.error(errorMessgage);
  }
  return null;
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      
      <Form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold"> Register </h4>
        <FormInput type = 'text' label = 'username' name ='username' defaultValue='james151 smith'/>
        <FormInput type = 'email' label = 'email' name ='email' defaultValue='james151@gmail.com'/>
        <FormInput type = 'password' label = 'password' name ='password' defaultValue='secret' />
        <div className="mt-4">
          <SubmitBtn/>
        </div>
        <p className="text-center">
          Already a member yet? 
          <Link to= '/login' className='ml-2 link link-hover link-primary capitalize'>login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register