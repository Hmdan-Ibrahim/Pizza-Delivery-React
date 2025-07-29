import { Link, NavLink } from 'react-router-dom'
import styles from "./Header.module.css";
import SearchOrder from '../../components/SearchOrder';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
      
const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/menu",
    title: "Menu",
  },
  {
    path: "/order/new",
    title: "Order",
  },
  {
    path: "/cart",
    title: "Cart",
  }
];

function Header() {
  return (
    <header>
      <nav className={`container ${styles.nav}`}>
        <Link to={"/"} className={styles.logo}>🍕 Fast Pizza</Link>
        <SearchOrder key={"Search Order"} />
        <NavLinks/>
      </nav>
    </header>
  );
}

function NavLinks(){
  return (
    <ul className={styles.navLinks}>
      {routes.map(route => {
        return (
          <li key={route.title}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {route.title !== "Cart" ? route.title : <CartIcon />}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

function CartIcon(){
  const cardLength = useSelector((store: RootState) => store.cartReducer.cart).length
  return (
    <span className={styles.cart}>
      Cart 🛒
      {cardLength > 0 && <span className="numOfItem"> {cardLength}</span>}
    </span>
  );
}

export default Header
