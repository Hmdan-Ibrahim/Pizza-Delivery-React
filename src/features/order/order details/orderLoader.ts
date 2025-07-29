import type { LoaderFunctionArgs } from "react-router-dom";
import { getFromCache, setCache } from "../../../cache";
import { getOrder } from "../../../services/pizza.api";

const orderCacheKey = "orderDetails"

export async function orderLoader({ params }: LoaderFunctionArgs) {
  const { orderId } = params;

  if (!orderId) {
    throw new Error("No pizzaId provided");
  }
  let order = getFromCache(orderCacheKey);
  if (order?.orderId === orderId) return order;

  order = await getOrder(orderId);
  setCache(orderCacheKey, order);
  return order;
}
