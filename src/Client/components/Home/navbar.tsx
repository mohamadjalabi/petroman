import { useState, useEffect } from 'react';
import { Drawer, Button, Menu, Divider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '/src/Client/assets/Petroman logo text white v2@12x.png';

const menuItems = [
    { key: 'home', label: 'Home', path: '/', scrollTo: 'home' },
    {
        key: 'products',
        label: 'Products',
        children: [

            { key: 'coolants', label: 'Coolants', path: '/coolants', scrollTo: 'coolant' },
            { key: 'oil-lubricants', label: 'Oil & Lubricants', path: '/oil-lubricants', scrollTo: 'oil' },
            { key: 'car-care', label: 'Car Care', path: '/car-care', scrollTo: 'care' },
            { key: 'all-products', label: 'All Products', path: '/products', scrollTo: 'products'}
        ]
    },
    { key: 'events', label: 'Events', path: '/events', scrollTo: 'events' },
    { key: 'distribute', label: 'Distributer', path: '/distributers', scrollTo: 'distributer' },
    { key: 'about-us', label: 'About Us', path: '/about' , scrollTo: 'abouts'},
    { key: 'contact-us', label: 'Contact Us', scrollTo: 'contact-us-section' }
];

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeEffect, setActiveEffect] = useState<string | null>(null); // Store the active item with effect
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, [location]); // Runs every time the location changes

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setDrawerOpen(false);
            
        }
    };
    const navigateHome = () => {
        setActiveEffect("/"); // Set the active item for the effect
        if(location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
            setDrawerOpen(false);
        } else
        navigate('/');
        setDrawerOpen(false);
        setTimeout(() => {
            setActiveEffect(null);
        }, 500); // Reset the active effect after 500ms  
    };

    const handleNavigation = (path: string | undefined, scrollTo: string | undefined, key: string) => {
        setActiveEffect(key); // Set the active item for the effect
        if (path === location.pathname) {
            // If we're already on the correct page, just scroll
            if (scrollTo) {
                const section = document.getElementById(scrollTo);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                }
            }
            setDrawerOpen(false); // Close the drawer after scrolling
        } else {
            // Navigate to the new route
            navigate(path || '/');
            setDrawerOpen(false); // Close the drawer
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page    
            // After navigation, check if we need to scroll to a section
            if (scrollTo) {
                // We need to scroll after a route change
                setTimeout(() => {
                    const section = document.getElementById(scrollTo);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page

                    }
                }, 300); // Delay to ensure page is loaded before scrolling
            }
        }
        setTimeout(() => {
            setActiveEffect(null);
        }, 500); // Reset the active effect after 500ms
    };
    

    const renderMenuItems = menuItems.map(item => {
        if (item.children) {
            return {
                key: item.key,
                label: item.label,
                children: item.children.map(subItem => ({
                    key: subItem.key,
                    className: location.pathname === subItem.path ? 'active-nav-item' : '', // Active class for sub-items
                    label: subItem.label,
                    onClick: () => { handleNavigation(subItem.path, subItem.scrollTo, subItem.key); }
                }))
            };
        } else if (item.key === 'home') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
            
        } 
        else if (item.key === 'events') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'distribute') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'about-us') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'oil') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'coolant') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'care') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.key === 'products') {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => item.scrollTo && handleNavigation(item.path,item.scrollTo,item.key)
            };
        }
        else if (item.scrollTo) {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => {scrollToSection(item.scrollTo);setDrawerOpen(false);}
            };
        } else {
            return {
                key: item.key,
                label: item.label,
                className: location.pathname === item.path ? 'active-nav-item' : '',  // Add active class for top-level items
                onClick: () => {navigate(item.path || '/');setDrawerOpen(false);}
            };
        }
    });

    return (
        <div className="navbar-container">
            <div className="slogan-container">
                <img style={{ cursor: 'pointer' }} src={Logo} alt="Petroman Logo" className="logo" onClick={navigateHome}/>
            </div>

            {/* Always render the menu button or close button */}
            <Button className="menu-button" onClick={toggleDrawer}>
                <MenuOutlined />
            </Button>

            {/* Always show the horizontal menu on desktop */}
            <Menu  items={renderMenuItems} mode="horizontal" className="navbar" selectable={false}>
            </Menu>

            {/* Drawer */}
            <Drawer
                placement="right"
                onClose={toggleDrawer}
                open={drawerOpen}
                width="100%"
                style={{ top: '64px' }}  // Keep the same top for the drawer
            >
                {/* Drawer content with background styles */}
                <div 
                    style={{
                        color: 'white', 
                        backgroundColor: '#000000', 
                        backgroundImage: `
                            linear-gradient(135deg, rgba(255, 215, 0, 0.3) 25%, transparent 25%), 
                            linear-gradient(225deg, rgba(102, 97, 67, 0.3) 25%, transparent 25%), 
                            linear-gradient(45deg, rgba(33, 32, 30, 0.3) 25%, transparent 25%), 
                            linear-gradient(315deg, rgba(255, 215, 0, 0.3) 25%, transparent 25%)
                        `, 
                        backgroundSize: '100% 60px', 
                        height: '100%',
                        padding: 0
                    }}
                >
                    <Menu  items={renderMenuItems} mode="inline" className="mobile-drawer" style={{ backgroundColor: '#000000', color: 'white' }}>
                    </Menu>
                    <Divider className='divider' />
                     <div className="copyright">
                         <p style={{ fontFamily: 'Tomorrow, sans-serif' }}>&copy; {new Date().getFullYear()} Petroman. All rights reserved.</p>
                         {/* <p style={{ fontFamily: 'Tomorrow, sans-serif' }}>Manufactured by Petroman Sultanate of Oman</p> */}
                         <img src="src\Client\assets\made-in-oman.png" alt="Made in Oman" className="copyright-pic made-in-oman" />                   
                    </div> 
                </div>
            </Drawer>
            {activeEffect && <div className={`nav-effect ${activeEffect}`}></div>}
        </div>
    );
}

export default Navbar;
