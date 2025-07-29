import styles from "./cartItem.module.css";
import type { ICartItem } from "../../utilities/intefaces/ICartItem";
import { useDispatch } from "react-redux";
import type { appDispatch } from "../../store";
import { removeItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { memo } from "react";

function CartItem({ pizza }: { pizza: ICartItem }) {
  const { pizzaId, name, price, quantity } = pizza;

  const dispatch = useDispatch<appDispatch>();

  return (
    <div className={styles.cartItem}>
      <div>
        <h3 className={styles.itemName}>{name}</h3>
        <p className={styles.itemDetails}>
          {quantity} × {price}$
        </p>
      </div>
      <div className={styles.itemActions}>
        <p className={styles.itemTotal}>${(price * quantity).toFixed(2)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <button
          onClick={() => dispatch(removeItem(pizzaId))}
          className={styles.removeButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default memo(CartItem);
