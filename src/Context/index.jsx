import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children})=> {
  // Shopping cart count - Increment quantity

  const [count, setCount] = useState(0);

  // Product detail state | Open & Close product detail

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product to show in product detail - Set product to show.

  const [product, setProduct] = useState({price: 0, title: "", description: "", image: ""});

  // Cart products - Add cart products

  const [cartProducts, setCartProducts] = useState([])

  const addProduct = (product) => {
    if(!cartProducts.includes(product)) {
      let newProducts = cartProducts;
      newProducts.push(product);
      setCartProducts(newProducts);
    };
  }

  const deleteProduct = (id) => {
    const newProducts = cartProducts.filter((oldProduct) => oldProduct.id !== id)
    setCartProducts(newProducts);
  }
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openShoppingCart = () => setIsCartOpen(true);
  const closeShoppingCart = () => setIsCartOpen(false);



  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      product,
      setProduct,
      cartProducts,
      deleteProduct,
      addProduct,
      isCartOpen,
      openShoppingCart,
      closeShoppingCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}