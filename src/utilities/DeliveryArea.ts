export const radius = 3000;
export const centerLat = 26.55695;
export const centerLong = 31.69478;

const deltaLat = (radius / 1000) / 111;
// const deltaLng = (radius / 1000) / (111 * Math.cos(centerLat * Math.PI / 180));
const deltaLng = (radius / 1000) / 111;


export enum DeliveryArea {
    minLat = centerLat - deltaLat,
    maxLat = centerLat + deltaLat,
    minLong = centerLong - deltaLng,
    maxLong = centerLong + deltaLng
}