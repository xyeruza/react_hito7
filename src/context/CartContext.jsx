import {createContext, useState} from 'react';

export const CartContext = createContext ();

const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([]);
    let total = carrito.reduce(
      (acumulador, pizza) => (acumulador += pizza.count),
      0
    );
  
    let total_price = carrito.reduce(
      (acumulador, pizza) => (acumulador += pizza.price * pizza.count),
      0
    );
    let formatted_total = total_price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'});

    const agregar = (pizza) => {
      let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
  
      let nuevo_producto = {
        id: pizza.id,
        name: pizza.name,
        img: pizza.img,
        price: pizza.price,
        desc: pizza.desc,
        count: 1,
      };
  
      if (coincidencia >= 0) {
        carrito[coincidencia].count++;
  
        setCarrito([...carrito]);
      } else {
        setCarrito([...carrito, nuevo_producto]);
      }
    };
  
    const eliminar = (pizza) => {
      let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
  
      if (coincidencia >= 0) {
        if (carrito[coincidencia].count > 1) {
          carrito[coincidencia].count--;
  
          setCarrito([...carrito]);
        } else {
          carrito.splice(coincidencia, 1);
  
          setCarrito([...carrito]);
        }
      }
    };


    return (
    <CartContext.Provider value={{ carrito, setCarrito, total, total_price, formatted_total, agregar, eliminar}}>
    {children}
    </CartContext.Provider>
    );
   };
   export default CartProvider;
