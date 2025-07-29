import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import GoUp from '../components/GoUp';
import DataLoader from '../components/loader/DataLoader';

export default function LayoutApp() {
    return (
      <>
        <Header />
        <main>
          <DataLoader />
          <Outlet />
          <GoUp />
        </main>
        <Footer />
      </>
    );
}
