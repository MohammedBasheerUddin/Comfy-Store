import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, order, company, category, price, shipping} = params
  return (
    <Form className="bg-base-200 round-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH  */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by Price"
        name="order"
        list={["high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange name="price" label="Price range" size="range-sm" price={price}/>
      {/* SHIPPING */}
      <FormCheckbox name="shipping" label="Free shipping" size="checkbox-sm" defaultValue={shipping}/>
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Filter
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
}

export default Filters;
