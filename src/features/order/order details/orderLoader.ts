import { getFromCache, setCache } from "../../../cache";
import { getOrder } from "../../../services/pizza.api";

interface iParams {
  orderId: string;
}

const orderCacheKey = "orderDetails"

export async function orderLoader({ params }: { params: iParams }) {
  let order = getFromCache(orderCacheKey)
  if(order?.orderId === params.orderId) return order

  order = await getOrder(params.orderId);
  setCache(orderCacheKey, order)
  return order;
}
