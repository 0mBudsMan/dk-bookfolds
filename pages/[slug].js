import { useRouter } from "next/router";
import products from "../data/dummy.json"
import { AllProducts } from "../components";

const Page = () => {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug)
  const filteredProducts = products.filter((p) => p.category.toLowerCase() === slug);
  console.log(filteredProducts)
  return (
    <div className="Allproducts-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
           
          <AllProducts product={product}/>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default Page;
