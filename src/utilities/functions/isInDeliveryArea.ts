import { DeliveryArea } from "../DeliveryArea";

export function isInDeliveryArea(lat: number, long: number): boolean {
  const { minLat, maxLat, minLong, maxLong } = DeliveryArea;
  return lat >= minLat && lat <= maxLat && long >= minLong && long <= maxLong;
}
