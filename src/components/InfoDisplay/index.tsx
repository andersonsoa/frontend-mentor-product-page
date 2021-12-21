import { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../contexts/CartContext";

import { CountButton } from "../CountButton";
import styles from "./styles.module.scss";

interface InfoDisplayProps {}

export const InfoDisplay = ({}: InfoDisplayProps) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: new Date().getTime().toString(),
      name: "Fall Limited Edition Sneakers",
      price: 120.0,
      quantity: count,
      image: "/image-product-1.jpg",
    });
  };

  return (
    <div className={styles.display}>
      <div className={styles.display__company}>Sneaker Company</div>

      <h2 className={styles.display__title}>Fall Limited Edition Sneakers</h2>

      <div className={styles.display__description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they will withstand everything
        the wheather can offer.
      </div>

      <div className={styles.display__pricebox}>
        <div className={styles.display__price_main}>
          <strong>$ 120.00</strong> <span>50%</span>
        </div>
        <div className={styles.display__price_borred}>$ 250.00</div>
      </div>

      <div className={styles.display__actions}>
        <CountButton
          count={count}
          onIncrement={() => setCount((x) => x + 1)}
          onDecrement={() => setCount((x) => (x === 1 ? 1 : x - 1))}
        />

        <button
          className={styles.display__cart_button}
          onClick={handleAddToCart}
        >
          <RiShoppingCartLine size={20} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};
