import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Product from "../Product";

export const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isCartOpen ? "flex" : "hidden"} flex-col shopping-cart fixed right-0 py-2 px-2`}>
      <div className="flex w-full justify-between ">
        <span className="font-bold">Shopping cart</span>
        <XMarkIcon 
          className="w-6"
          onClick={()=>{
            context.closeShoppingCart()
          }}
        />
      </div>
      <div className="flex flex-col gap-4 mt-3 h-full overflow-y-scroll">
        {context.cartProducts.length > 0 ? 
          context.cartProducts.map((product)=><Product
                                                key = {product.id}
                                                title={product.title} 
                                                price={product.price} 
                                                image={product.image}
                                                id = {product.id}/>) : 
          "There's nothing to show here! Why don't you add some items?"}
      </div>
    </aside>
  );
}