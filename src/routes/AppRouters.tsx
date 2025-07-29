import { createBrowserRouter } from "react-router-dom";

import LayoutApp from "../ui/LayoutApp";
import { OrderActionForm } from "../features/order/create order/OrderActionForm";
import { menuLoader } from "../features/menu/menuLoader";
import Error from "../components/Error";
import { orderLoader } from "../features/order/order details/orderLoader";
import PizzaDetails from "../features/menu/pizza details/PizzaDetails";
import { lazy, Suspense } from "react";
import { pizzaLoader } from "../features/menu/pizza details/pizzaLoader";
import NotFound from "../ui/NotFound";
import Loader from "../components/loader/Loader";

const Home = lazy(() => import("../ui/home/Home"));
const Menu = lazy(() => import("../features/menu/Menu"));
const Cart = lazy(() => import("../features/cart/Cart"));
const CreateOrder = lazy(
  () => import("../features/order/create order/CreateOrder")
);
const Order = lazy(() => import("../features/order/order details/Order"));

export const routes = createBrowserRouter([
  {
    path:"/",
    element: <LayoutApp />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>,
      },
      {
        path: "/menu",
        element:<Suspense fallback={<Loader />}>
            <Menu />
          </Suspense>,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/menu/:pizzaId",
        element: (
          <Suspense fallback={<Loader />}>
            <PizzaDetails />
          </Suspense>
        ),
        loader: pizzaLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/order/new",
        element: (
          <Suspense fallback={<Loader />}>
            <CreateOrder />
            </Suspense>
        ),
        action: OrderActionForm,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: (
          <Suspense fallback={<Loader />}>
            <Order />
            </Suspense>
        ),
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
  {path:"*", element:<NotFound/>}
]);


