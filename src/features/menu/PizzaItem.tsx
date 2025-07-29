import styles from "./PizzaItem.module.css";
import type { IPizza } from "../../utilities/intefaces/IPizza";
import { Link } from "react-router-dom";
import AddBtnWithNumItem from "../../components/AddBtnWithNumItem";
import { memo } from "react";

type props = {
  pizza: IPizza;
  quantity?: number;
};

function PizzaItem({ pizza, quantity }: props) {
  const { _id, name, image, price, avilable } = pizza;
  return (
    <div className={`${styles.card} ${!avilable ? styles.disabled : ""}`}>
      <div className={styles.image}>
        <img loading="lazy" src={image} alt={name} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        {!avilable ? (
          <span className={styles.soldOut}>Sold Out</span>
        ) : (
          `${price} $`
        )}
      </p>
      <div className={styles.buttons}>
        <AddBtnWithNumItem
          pizza={pizza}
          soltOut={!avilable}
          key={pizza._id}
          quantity={quantity}
        />
        <Link className="link" to={`/menu/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}

export default memo(PizzaItem);
