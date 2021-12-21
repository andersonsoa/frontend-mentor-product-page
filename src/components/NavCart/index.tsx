import NextImage from "next/image";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiDeleteBinLine, RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../contexts/CartContext";
import styles from "./styles.module.scss";

export const NavCart = () => {
  const { cart, removeFromCart } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const [showCart, setShowCart] = useState(false);

  const calcTotal = useCallback((price, quantity) => {
    return price * quantity;
  }, []);

  const handleRemoveItem = (e: SyntheticEvent, id: string) => {
    e.stopPropagation();

    removeFromCart(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCart && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCart]);

  return (
    <div className={styles.cart__container}>
      <button onClick={() => setShowCart(!showCart)}>
        <RiShoppingCartLine />
        <span className={styles.cart__items_count}>{cart.length}</span>
      </button>
      {showCart && (
        <div className={styles.cart__items} ref={cartRef}>
          <div className={styles.cart__title}>
            <h2>Cart</h2>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const total = calcTotal(item.price, item.quantity);

              return (
                <div key={item.id} className={styles.cart__item}>
                  <NextImage
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    layout="fixed"
                    objectFit="contain"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>
                      ${item.price} x {item.quantity} <span>${total}</span>
                    </p>
                  </div>
                  <button onClick={(e) => handleRemoveItem(e, item.id)}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              );
            })
          ) : (
            <div className={styles.cart__empty}>
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
