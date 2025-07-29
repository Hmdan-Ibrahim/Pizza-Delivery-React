import { useDispatch } from "react-redux";
import type { IPizza } from "../utilities/intefaces/IPizza";
import { addItem } from "../features/cart/cartSlice";

export interface AddBtnWithNumItemProps {
  pizza: IPizza;
  soltOut: boolean;
  quantity?: number;
}

export default function AddBtnWithNumItem({
  pizza,
  soltOut,
  quantity,
}: AddBtnWithNumItemProps) {

  const { _id, name, price } = pizza;
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <button
        disabled={soltOut}
        onClick={() =>
          dispatch(addItem({ pizzaId: _id, name, price, quantity: 1 }))
        }
      >
        {soltOut ? "Unavailable" : "Add to Cart"}
      </button>
      {quantity && (
        <span
          className="numOfItem"
          style={{
            width: "35px",
            height: "35px",
          }}
        >
          {quantity}
        </span>
      )}
    </div>
  );
}
