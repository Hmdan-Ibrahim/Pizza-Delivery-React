import type { LoaderFunctionArgs } from "react-router-dom";
import { getFromCache, setCache } from "../../../cache";
import { getItem } from "../../../services/pizza.api";

const pizzaCacheKey = "pizzaDetails"

export async function pizzaLoader({ params }: LoaderFunctionArgs) {

  const { pizzaId } = params;

  if (!pizzaId) {
    throw new Error("No pizzaId provided");
  }
  let pizza = getFromCache(pizzaCacheKey);
  if (pizza?._id === pizzaId) return pizza;

  pizza = await getItem(pizzaId);
  setCache(pizzaCacheKey, pizza);
  return pizza;
}