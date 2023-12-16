import { Link, useLoaderData, useNavigate} from "react-router-dom";
import { customfetch } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export async function loader({ params }) {
  const response = await customfetch(`/products/${params.id}`);
  const products = response.data.data;
  return { products };
}

function SingleProduct() {
  const { products } = useLoaderData();
  const { title, image, price, description, colors, company } =
    products.attributes;
  const [amount, setQuantity] = useState(1);
  const [productColor, setProductColors] = useState(colors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProduct = {
    cartID: products.id + productColor,
    productID: products.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
    navigate('/cart')
  };
  function handleQuantity(e) {
    setQuantity(parseInt(e.targert.value));
  }
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            <Link to="/products"> Products </Link>{" "}
          </li>
        </ul>
      </div>

      {/* PRODUCT */}

      <div className="mt-5 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="text-3xl capitalize font-bold"> {title} </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{price / 100}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider"> Colors </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColors(color)}
                  ></button>
                );
              })}
          </div>
            {/* QUANTITY */}

            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="quantity">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Quantity
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-medium shadow-xl"
                id="amount"
                value={amount}
                onChange={handleQuantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            {/* -> REPLACE ALL BY BUY NOW BUTTON POINTING TO ORDER PAGE */}
            {/* CART */}
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={addToCart}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
