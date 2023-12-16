import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { customfetch } from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customfetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged In Successfully.");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessgage =
        error?.response?.data?.error?.message ||
        "Please check your input again";
      toast.error(errorMessgage);
    }
    return null;
  };

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function loginAsGuest (){
    try{
      const response = await customfetch.post('/auth/local', {
        identifier:'test@test.com',
        password:'secret',
      })
      dispatch(loginUser(response.data))
      toast.success('welcome guest user');
      navigate('/')
    }catch(error){
      const errormessage = 'yellow';
      toast.error(errormessage)
    }
  }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 bg-base-100 shadow-lg flex flex-col gap-y-5 px-9 py-10"
      >
        <h4 className="text-center text-2xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4 items-center">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-accent btn-block" onClick={loginAsGuest}>
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register now
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
