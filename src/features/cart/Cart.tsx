import styles from "./Cart.module.css";
import type { ICartItem } from "../../utilities/intefaces/ICartItem";
import { type appDispatch, type RootState } from "../../store";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCartMessage from "../../components/EmptyCartMessage";
import { memo } from "react";

const Cart = memo(function Cart() {
  const cart: ICartItem[] = useSelector(
    (store: RootState) => store.cartReducer.cart
  );

  const dispatch = useDispatch<appDispatch>();
  const totalPrice = cart.reduce(
    (acc: number, item: ICartItem) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className={`box`}>
        <div className={styles.headerSection}>
          <h2 className={styles.heading}>Your Cart</h2>
          {cart.length > 0 && (
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          )}
        </div>

        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div>
            {cart.map((item: ICartItem) => (
              <CartItem key={item.pizzaId} pizza={item} />
            ))}
            <div className={styles.footerSection}>
              <Link className="link" to={"/order/new"}>
                Order Now
              </Link>
              <p className={styles.totalText}>
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Cart;
