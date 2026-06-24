// layouts/PrivateLayout.js
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SideBar/sidebar';
import Footer from '../components/Footer/Footer';
import UserHeader from '../components/UserHeader/UserHeader';
import './PrivateLayout.css';

const PrivateLayout = () => (
  <div className="private-layout">
    <UserHeader />
    <div className="main-content-with-sidebar">
      <Sidebar />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
);

export default PrivateLayout;
