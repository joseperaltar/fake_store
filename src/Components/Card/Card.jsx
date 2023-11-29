import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({title, price, category, thumbnail, item}) => {
  const context = useContext(ShoppingCartContext);
  return (
    <article 
      className="w-40 flex flex-col"
      onClick={(e)=>{
        context.openProductDetail();
        context.setProduct(item);
      }}
      >
      <figure className="relative h-40 w-full flex justify-center">
        <div 
          className="bg-hospital-green width p-1 rounded-full absolute right-0 top-0"
          onClick={(e)=>{
            e.stopPropagation();
            context.setCount(context.count + 1);
            context.addProduct(item);
          }}
        >
          <PlusIcon className="w-4 text-white font-bold"/>
        </div>
        <img className="h-full rounded-2xl object-cover object-center" src={thumbnail}/>
        <p className="text-white font-bold absolute bottom-2 left-1 bg-hospital-green rounded-lg px-1 py-0.5 text-sm">
          {category}
        </p>
      </figure>
      <p className="flex justify-between gap-0 mt-2">
        <span className="truncate font-light">{title}</span>
        <span className="font-bold">{`$${price}`}</span>
      </p>
    </article>
  );
}

export default Card;