
import { getFromCache, setCache } from "../../cache";
import { getMenu } from "../../services/pizza.api";

const menuCacheKey = "menu"

export async function menuLoader() {
    let menu = getFromCache(menuCacheKey)
    if(menu?.length > 0) return menu

    menu = await getMenu();
    setCache(menuCacheKey, menu)
    return menu;
}