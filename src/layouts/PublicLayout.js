// layouts/PublicLayout.js
import { Outlet } from 'react-router-dom';
import LandingNavbar from '../components/LandingNavbar/LandingNavbar';
import Footer from '../components/Footer/Footer';
import '../layouts/layout.css'; // Importing layout styles
const PublicLayout = () => (
  <>
  <div className='bg'>
    <LandingNavbar />
    <Outlet />
    <Footer />
  </div>
  </>
);

export default PublicLayout;
