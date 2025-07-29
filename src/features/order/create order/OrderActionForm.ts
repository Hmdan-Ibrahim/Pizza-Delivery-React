import { redirect } from "react-router-dom";
import { createOrder } from "../../../services/pizza.api";
import store from "../../../store";
import { clearCart } from "../../cart/cartSlice";

export async function OrderActionForm({ request }: { request: Request }) {
  const formData = await request.formData();
  const {customer, phone, address, latitude, longitude} = Object.fromEntries(formData);

  const newOrder = await createOrder({
    customer: customer as string,
    phone: phone as string,
    address: {
      addressName: address as string,
      position: {
        latitude: +latitude as number,
        longitude: +longitude as number,
      }
    },
    orderItems: store.getState().cartReducer.cart,
  });
  
  if (newOrder.status === "success") {
    store.dispatch(clearCart())
    return redirect(`/order/${newOrder.data.orderID}`)
  };
  return newOrder;
  
}