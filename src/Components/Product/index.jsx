import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Product = ({ id, title, price, image }) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-1 items-center">
        <img src={image} alt="" className="w-16 rounded-lg"/> 
        <span className="text-center">{title}</span>
      </div>
      <div className="flex gap-1">
        <span className="font-bold">${price}</span>
        <XMarkIcon 
          className="w-6"
          onClick={()=>context.deleteProduct(id)}/>
      </div>
    </div>
  )
}

export default Product;