import "./styles.css";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 bg-white  py-2 px-2` }>
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Details</h2>
        <div>
          <XMarkIcon 
            className="h-5 w-5"
            onClick={(e)=>{
              context.closeProductDetail();
            }}
          />
        </div>
      </div>
      <div className="relative h-full flex items-center flex-col">
        <img className="h-56 object-cover" src={context.product.image}/>
        <p className="flex flex-col self-start">
          <span className="font-bold">{`$${context.product.price}`}</span>
          <span className="font-light">{context.product.title}</span>
        </p>
        <p className="description mt-5 font-light h-40 overflow-y-scroll">
          {context.product.description}
        </p>
        <button 
          className="bg-hospital-green text-white font-bold py-2 px-2 w-full rounded-lg flex items-center justify-center bottom-0 absolute"
          onClick={()=>context.addProduct(context.product)}>
            <ShoppingCartIcon className="h-6"/> Add to cart
          </button>
      </div>
    </aside>
  )
}

export default ProductDetail