import type { ICartItem } from "./ICartItem";
export interface OrderItem extends ICartItem {
    total: number
}
interface Order {
    customer: string;
    address: {
        addressName: string,
        position: {
            latitude: number,
            longitude: number
        }
    };
    orderItems: ICartItem[]
} 

export interface ICreateOrder extends Order {
    phone: string;
}

export interface IOrder extends Order{
    orderID: string;
    deliveryPerson?: { name: string; phone: string};
    items: OrderItem[];
    totalPrice: number;
    orderPrice: number;
    status: "pending" | "preparing" | 'on the way' | 'delivered' | "cancelled";
    newOrder?: boolean;
}