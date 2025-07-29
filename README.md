
# 🍕 Fast Pizza Delivery System

A complete pizza ordering system built with React, Vite, TypeScript, interact with node & express for back end. It supports live order creation, location-based delivery validation, and real-time map interaction with Leaflet (OpenStreetMap).

## 🚀🔑 Pages

- ✅ **Landing Page** – Overview of the restaurant
- 🍽️ **Menu Page** – Displays available items, allows adding pizzas to the cart
- 🛒 **Cart Page** – Shows selected items, persisted in localStorage
- 🔍 **Pizza Details Page** – Detailed info for each item
- 📍 **Order Form Page** – Collects delivery information with a map for location selection
- 📦 **Order Details Page** – Displays order summary and location on the map

---

## 🚀🔑 Features
- Creating requests with address verification using map coordinates.
- Drawing a circle or rectangle to define delivery zones only
- Displaying order status (in progress, on the way, delivered, canceled)
- Automatically recording the time and date of the order
- Retrieving orders by user or representative
- Customer can create orders with name, phone, and delivery address.
- Status of orders (`pending`, `preparing`, `on the way`, `delivered` , `cancelled`).
- Follow your order using a unique ID

---

## 📌 Notes

- When placing an order, location selection is restricted to a predefined delivery zone.
- The app does **not** include authentication; it focuses on fast and simple ordering.
- Orders can only be tracked using the **Order ID**.

---

## 🧪 Future Enhancements

- Add user authentication (Sign In / Sign Up)
- Integrate online payment methods
- Admin panel for managing orders and products

---

## 🗺️ Location-based Delivery

- Interactive map in the order form
- Users can manually select precise delivery coordinates
- App validates delivery zone against allowed boundaries

---

## 📍 Delivery Zone

The app restricts delivery only to specific regions (e.g., Sohag City). The allowed delivery area is defined using latitude and longitude boundaries:

```ts
export const DeliveryArea = {
  minLat: 26.526016113182354,
  maxLat: 26.57304869925079,
  minLong: 31.67151191956154,
  maxLong: 31.72435817398636
};

## 📦 Technologies Used
| Frontend  | React, Vite, TypeScript, CSS Modules |
| Maps      | Leaflet, OpenStreetMap               |