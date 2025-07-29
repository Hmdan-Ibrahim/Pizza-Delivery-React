import { useSelector } from "react-redux";
import styles from "./createOrder.module.css";
import { Form, useActionData, useNavigation } from "react-router-dom";
import type { RootState } from "../../../store";
import EmptyCartMessage from "../../../components/EmptyCartMessage";
import { useReducer } from "react";
import { mapReducer, type State } from "../../../reducer/mapReducer";
import { getAddress, getPosition } from "../../../services/geoLocation.api";
import Map from "../Map";
import { centerLat, centerLong } from "../../../utilities/DeliveryArea";
import { isInDeliveryArea } from "../../../utilities/functions/isInDeliveryArea";

const initialState: State = {
  address: "",
  position: {
    latitude: centerLat,
    longitude: centerLong,
  },
  loading: false,
  error: null,
};

export default function CreateOrder() {
  const navigation = useNavigation();
  const formActionData = useActionData();

  const cartLength = useSelector(
    (store: RootState) => store.cartReducer.cart
  ).length;

  const [state, dispatch] = useReducer(mapReducer, initialState);
  const isSubmitting = navigation.state === "submitting";

  const handlePosition = (e: React.FormEvent) => {
    e.preventDefault();
    
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      dispatch({ type: "SET_POSITION", payload: { latitude, longitude } });

      const addressObj = await getAddress(latitude, longitude, dispatch);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
      dispatch({ type: "SET_ADDRESS", payload: address });
    });
  };

  const setPositionWithMap = async (latitude: number, longitude: number) => {
    const outSpace = isInDeliveryArea(+latitude, +longitude);    

    dispatch({ type: "SET_POSITION", payload: { latitude, longitude } });
    if (!outSpace)
      dispatch({
        type: "SET_ERROR",
        payload:
          "This address is not part of our location, check is the location in sohag city",
      });
    const addressObj = await getAddress(latitude, longitude, dispatch);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    dispatch({ type: "SET_ADDRESS", payload: address });
    
  };

  return (
    <div className="container">
      <div className={`box`}>
        {!cartLength || cartLength === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <h2 className={styles.headForm}>Get a New Order</h2>
            {formActionData?.status !== "success" && (
              <p className={styles.error}>{formActionData?.message}</p>
            )}
            <Form method="POST" className={styles.form}>
              <fieldset>
                <label>Name:</label>
                <input
                  type="text"
                  name="customer"
                  required
                  pattern="[a-z A-Z 0-9]{,3}"
                  title="Name must be at least 3 characters long"
                />
              </fieldset>
              <fieldset>
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  required
                  pattern="^01[0125][0-9]{8}$"
                  title="Please enter a currect egyption phone number. We might need it to contact you."
                />
              </fieldset>
              <fieldset>
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Please enter a currect address"
                  required
                  value={state.address}
                  onChange={(e) => {
                    getPosition(e.target.value, dispatch);
                    dispatch({ type: "SET_ADDRESS", payload: e.target.value });
                  }}
                />
                <input
                  type="hidden"
                  name="latitude"
                  value={state.position?.latitude || ""}
                />
                <input
                  type="hidden"
                  name="longitude"
                  value={state.position?.longitude || ""}
                />
              </fieldset>

              {state.error && <p style={{ color: "red" }}>{state.error}</p>}
              <Map position={state.position} setPosition={setPositionWithMap} />

              {state.address === "" && (
                <button
                  className={styles.getPostionBTN}
                  onClick={handlePosition}
                >
                  Get position
                </button>
              )}
              <button
                disabled={isSubmitting || state.error !== null}
                type="submit"
              >
                {isSubmitting
                  ? "Order Submitting..."
                  : state.error
                  ? "wrong Location"
                  : "Order Naw"}
              </button>
            </Form>
            <p className={styles.note}>
              ⭐When your order created, Keep the Order ID so you can track your
              order
            </p>
          </>
        )}
      </div>
      {/* <Map address={address} setPosition= {setPosition}/> */}
    </div>
  );
}
