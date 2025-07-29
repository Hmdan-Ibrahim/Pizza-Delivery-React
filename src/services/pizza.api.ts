import type { ICreateOrder } from "../utilities/intefaces/IOrder";

const API_URL_L = import.meta.env.VITE_API_URL;

export async function getMenu() {
  try {
    const res = await fetch(`${API_URL_L}/menu`);
    const {data} = await res.json();

  if (!res.ok) throw Error(res.statusText || 'Failed getting menu');

  return data;
  } catch {
    throw Error('Failed getting menu')
  }
}

export async function getItem(id: string) {
  try {
    const res = await fetch(`${API_URL_L}/menu/${id}`);
    const {data} = await res.json();
    if (!res.ok) throw Error('Failed getting pizza item');
    
    return data;
  } catch {
    throw Error('Failed getting pizza item');
  }
}

export async function getOrder(id:string) {

  const res = await fetch(`${API_URL_L}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data  = await res.json();
  return data;
}

export async function createOrder(newOrder: ICreateOrder) {
  try {
    const res = await fetch(`${API_URL_L}/order/new`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await res.json();    
    return data;
  } catch {
    throw Error('Failed creating your order, Internal Server Error');
  }
}
