import type { Action } from "../reducer/mapReducer";
import { isInDeliveryArea } from "../utilities/functions/isInDeliveryArea";

export async function getAddress(latitude: number, longitude: number , dispatch: React.Dispatch<Action> ) {
    const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!res.ok) return dispatch({ type: "SET_ERROR", payload: "Failed getting address" })

    const data = await res.json();
    return data;
}

export function getPosition(address: string, dispatch: React.Dispatch<Action>){
    if (address.length > 3) {
        dispatch({ type: "SET_LOADING", payload: true });

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then((res) => res.json())
        .then((data) => {
        if (data.length > 0) {
            const latitude = parseFloat(data[1].lat);
            const longitude = parseFloat(data[1].lon);
            const outSpace = isInDeliveryArea(+latitude, +longitude)            

            dispatch({ type: "SET_POSITION", payload: {latitude, longitude} });
            if(!outSpace) dispatch({ type: "SET_ERROR", payload: "This address is not part of our location, check is the location in sohag city" });
        } else {
            dispatch({ type: "SET_ERROR", payload: "The location was not found" });
        }
        })
        .catch(() => dispatch({ type: "SET_ERROR", payload: "An error occurred while fetching the data" }))
        .finally(()=> dispatch({ type: "SET_LOADING", payload: false }))
    }
}