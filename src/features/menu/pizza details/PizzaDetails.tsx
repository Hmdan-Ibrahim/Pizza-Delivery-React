import { useSelector } from "react-redux";
import AddBtnWithNumItem, {
  type AddBtnWithNumItemProps,
} from "../../../components/AddBtnWithNumItem";
import styles from "./PizzaDetails.module.css";
import { useLoaderData } from "react-router-dom";
import type { RootState } from "../../../store";

const PizzaDetails = () => {
  const pizza = useLoaderData();

  if (!pizza) {
    return <div className={styles.notFound}>Pizza not found 🍕</div>;
  }

  return (
    <div className="container">
      <div className="box">
        <div className={styles.image}>
          <img src={pizza.image} alt={pizza.name} className={styles.image} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{pizza.name}</h2>
          <p className={styles.description}>
            <strong>Description:</strong>{" "}
            <span>
              {pizza.description}
            </span>
          </p>
          <p className={styles.ingredients}>
            <strong>Ingredients:</strong>{" "}
            <span>{pizza.ingredients.join(", ")}</span>
          </p>
          <p className={styles.price}>
            <strong>Price: ${pizza.price}</strong>
          </p>
          <div className="button">
            {pizza.avilable ? (
              <AddBtnWithNumItemInDetails
                pizza={pizza}
                soltOut={!pizza.avilable}
              />
            ) : (
              <span className={styles.soldOut}>Sold Out</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function AddBtnWithNumItemInDetails({
  pizza,
  soltOut,
}: AddBtnWithNumItemProps) {
  const quantity = useSelector((state: RootState) =>
    state.cartReducer.cart.find((item) => item.pizzaId === pizza._id)
  )?.quantity;

  return (
    <AddBtnWithNumItem pizza={pizza} soltOut={soltOut} quantity={quantity} />
  );
}

export default PizzaDetails;
