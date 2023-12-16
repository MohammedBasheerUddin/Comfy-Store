import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero"
import { customfetch } from "../utils/index"

const url= '/products?featured=true';

export async function loader(){
  const response = await customfetch(url);
  const products = response.data.data;
  return {products};
}

function Landing() {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing