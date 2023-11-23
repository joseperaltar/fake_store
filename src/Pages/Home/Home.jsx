import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

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
    <div className="test">
      {items?.map((item)=>(
        <Card 
          key={item.id} 
          title={item.title} 
          price={item.price}
          category={item.category} 
          thumbnail={item.image} />
      ))}
    </div>
  )
}

export default Home;