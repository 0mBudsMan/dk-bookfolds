import { useRouter } from "next/router";
import products from "../data/dummy.json"
import { AllProducts } from "../components";
import EmblaCarousel from "../components/EmblaCarousel";
const Page = () => {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug)
  if(slug=="portrait"){
    const filteredProducts = products.filter((p) => p.category.toLowerCase() === slug);
    const OPTIONS = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return(
      <EmblaCarousel product={filteredProducts[0]} />
    )
  }
  const filteredProducts = products.filter((p) => p.category.toLowerCase() === slug);
  console.log(filteredProducts)
  return (
    <div className="Allproducts-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
           
          <AllProducts key={product.name} product={product}/>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default Page;
