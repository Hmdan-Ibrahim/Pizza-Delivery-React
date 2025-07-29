// import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./Order.module.css";
import type { IOrder, OrderItem } from "../../../utilities/intefaces/IOrder";
import Map from "../Map";

function Order() {
  const order: IOrder = useLoaderData().data;
  return (
    <div className="container">
      <div className={`box`}>
        <h2 className={styles.title}> Order ID : {order.orderID}</h2>
        <h3>Customer: {order.customer}</h3>
        <h4>Address: {order.address.addressName}</h4>
        <ul className={styles.items}>
          <h4>Items: </h4>
          {order.items.map((item: OrderItem, i: number) => (
            <li key={item.pizzaId} className={styles.item}>
              <h4>
                {i + 1}- {item.name}:
              </h4>
              <h5>
                {item.price}$ x {item.quantity} = {item.total}$
              </h5>
            </li>
          ))}
        </ul>
        <p className={styles.total}>Total: {order.totalPrice} $</p>
        {order.deliveryPerson?.name && (
          <h4>
            Delivery: {order.deliveryPerson?.name},{" "}
            {order.deliveryPerson?.phone}
          </h4>
        )}
        <p className={styles.status}>Status: {order.status}</p>
        <Map position={order.address.position} />
      </div>
    </div>
  );
}

export default Order;
