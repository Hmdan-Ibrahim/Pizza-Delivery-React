import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

type props = {
  pizzaId: string;
};
function UpdateItemQuantity({ pizzaId }: props) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button
        className="numOfItem"
        style={{
          padding: "7px",
          marginRight: 2
        }}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
      <button
        className="numOfItem"
        style={{
          padding: "7px",
        }}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div> 
  );
}

export default UpdateItemQuantity;