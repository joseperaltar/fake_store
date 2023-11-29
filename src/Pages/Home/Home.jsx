import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCart } from "../../Components/ShoppingCart";

const API_URL = "https://fakestoreapi.com/";

function Home() {

  const [items, setItems] = useState(null);

  useEffect( ()=>{
    let ignore = false;
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}products`);
        if(!ignore) setItems(await res.json());
      } catch(err) {
        console.error("Ha habido un error", err);
      } 
    }

    fetchData();

    return () => ignore = true;
  }, [])

  
  return (
    <>
      <div className="grid grid-cols-5 justify-center max-w-full gap-20">
        {items?.map((item)=>(
          <Card 
          item={item}
          key={item.id} 
          title={item.title} 
          price={item.price}
          category={item.category} 
          thumbnail={item.image} />
          ))}
      </div>
      <ProductDetail />
    </>
  )
}

export default Home;