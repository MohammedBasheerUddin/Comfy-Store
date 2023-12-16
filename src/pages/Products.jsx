import Filters from "../components/Filters";
import PaginationConatiner from "../components/PaginationConatiner";
import ProductsConatiner from "../components/ProductsConatiner";
import { customfetch } from "../utils";

const url = "/products";
export async function loader({request}) {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customfetch(url, {params});
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsConatiner />
      <PaginationConatiner />
    </>
  );
}

export default Products;
