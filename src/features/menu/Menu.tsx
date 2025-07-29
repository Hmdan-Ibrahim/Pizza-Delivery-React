import { useLoaderData } from "react-router-dom";
import PizzaItem from "./PizzaItem";
import type { IPizza } from "../../utilities/intefaces/IPizza";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { ICartItem } from "../../utilities/intefaces/ICartItem";

function Menu() {
  const menu: IPizza[] = useLoaderData();
  const [search, setSearch] = useState("");

  const cart = useSelector((store: RootState) => store.cartReducer.cart);
  const Pizza = (id: string): ICartItem | undefined =>
    cart.find((item) => item.pizzaId === id);

  const filteredPizzas = useMemo(() => {
    return menu.filter((pizza: IPizza) =>
      pizza.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [menu, search]);

  return (
    <div className="container">
      <input
        type="text"
        value={search}
        placeholder="search for pizza"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>Menu</h1>
      {filteredPizzas.length === 0 ? (
        <>
          <p className="empty-message">No pizzas found</p>
          {menu.length > 0 && (
            <button onClick={() => setSearch("")}>Show All</button>
          )}
        </>
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {filteredPizzas.map((pizza: IPizza) => (
            <PizzaItem
              key={pizza._id}
              pizza={pizza}
              quantity={Pizza(pizza._id)?.quantity}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
