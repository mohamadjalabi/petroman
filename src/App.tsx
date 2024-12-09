import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Client/components/Home/home';
import CarCare from './Client/components/Navbar/Products/carcare';
import Coolants from './Client/components/Navbar/Products/coolants';
import OilandLubricants from './Client/components/Navbar/Products/oil-lubrictans';
import Distributer from './Client/components/Navbar/distributer';
import Events from './Client/components/Navbar/events';
import Products from './Client/components/Navbar/Products/products';
import CarCareInfo from './Client/components/Navbar/Products/car-care-info';
import CoolantsInfo from './Client/components/Navbar/Products/coolantsInfo';
import Navbar from './Client/components/Home/navbar';
import Searcher from './Client/components/Home/searcher';
import Contact from './Client/components/Home/contact';
import AboutUs from './Client/components/Navbar/about';
import BrochureViewer from './Client/components/Home/brochure';
// import MaintenanceOverlay from './Client/components/Home/overlay';
import ScrollToTopButton from './Client/components/Home/ScrollToTopButton';
import OilAndLubricantsInfo from './Client/components/Navbar/Products/oil-lubricants-info';
function App() {
    return (
        <>
        {/* <MaintenanceOverlay /> */}
        <Router>
        <ScrollToTopButton />
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<BrochureViewer />} />
                <Route path="/searcher" element={<Searcher />} />
                <Route path="/coolants" element={<Coolants />} />
                <Route path="/oil-lubricants" element={<OilandLubricants />} />
                <Route path="/car-care" element={<CarCare />} />
                <Route path="/distributers" element={<Distributer />} />
                <Route path="/events" element={<Events />} />
                <Route path="/products" element={<Products />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path="/car-care-info/:careName" element={<CarCareInfo />} />
                <Route path="/oil-lubricants-info/:oillubricantName" element={<OilAndLubricantsInfo />} />
                <Route path="/coolants-info/:coolantName" element={<CoolantsInfo />} />
            </Routes>
        </Router>
        <Contact/>
        </>
    );
}

export default App;