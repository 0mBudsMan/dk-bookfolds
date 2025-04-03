import { useRouter } from 'next/router'
import products from "../data/dummy.json"
import { AllProducts } from "../components";
import EmblaCarousel from "../components/EmblaCarousel";
import { useEffect, useState } from "react";
import ShippingPolicy from '../components/ShippingPolicy';
import About from '../components/About';
import RefundPolicy from '../components/RefundPolicy';
const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [subcategory, setSubcategory] = useState("name"); 

  
  useEffect(() => {
    if (slug === "logo") {
      router.push("/product/customized-logo");
    }
  }, [slug, router]);

  if(slug==="shipping-policy"){
    return <ShippingPolicy />
  }

  if(slug==="about"){
    return <About/>
  }

  if(slug==="refund"){
    return  <RefundPolicy />
  }
  let filteredProducts = [];
  if (slug === "customised") {
    filteredProducts = products.filter((p) => p.category.toLowerCase() === subcategory);
  } else {
    filteredProducts = products.filter((p) => p.category.toLowerCase() === slug);
  }


  if (slug === "portrait" ) {
    
    return <EmblaCarousel product={filteredProducts[0]} />;
  }
  
  if (slug === "customised") {

    

    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <button
            style={{
              padding: '10px 16px',
              backgroundColor: subcategory === 'name' ? '#000000' : '#F5F5F5',
              color: subcategory === 'name' ? '#FFFFFF' : '#000000',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onClick={() => setSubcategory("name")}
          >
            Name
          </button>
          <button
            style={{
              padding: '10px 16px',
              backgroundColor: subcategory === 'initials' ? '#000000' : '#F5F5F5',
              color: subcategory === 'initials' ? '#FFFFFF' : '#000000',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onClick={() => setSubcategory("initials")}
          >
            Initial
          </button>
          <button
            style={{
              padding: '10px 16px',
              backgroundColor: subcategory === 'date' ? '#000000' : '#F5F5F5',
              color: subcategory === 'date' ? '#FFFFFF' : '#000000',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onClick={() => setSubcategory("date")}
          >
            Date
          </button>
        </div>

        <EmblaCarousel product={filteredProducts[0]} />
        
      </div>
    );
  }

  

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
