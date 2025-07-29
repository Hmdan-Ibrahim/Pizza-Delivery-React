import { getFromCache, setCache } from "../../../cache";
import { getItem } from "../../../services/pizza.api";

type params = {
    pizzaId: string
}
const pizzaCacheKey = "pizzaDetails"

export async function pizzaLoader({params}:{params: params}){
    let pizza = getFromCache(pizzaCacheKey)
    if(pizza?._id === params.pizzaId) return pizza

    pizza = await getItem(params.pizzaId)
    setCache(pizzaCacheKey, pizza)
    return pizza;
}