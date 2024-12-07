import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined, ProductOutlined, CalendarOutlined, ShopOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
const { Header } = Layout;

const Navbar: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // Simulate loading time
    };

    const menuItems = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: <Link to="/" onClick={startLoading}>Home</Link>
        },
        {
            key: '2',
            icon: <ProductOutlined />,
            label: 'Products',
            children: [
                { key: '2.1', label: <Link to="/products" onClick={startLoading}>All Products</Link> },
                { key: '2.2', label: <Link to="/coolants" onClick={startLoading}>Coolants</Link> },
                { key: '2.3', label: <Link to="/oil-lubricants" onClick={startLoading}>Oil & Lubricants</Link> },
                { key: '2.4', label: <Link to="/car-care" onClick={startLoading}>Car Care</Link> }
            ]
        },
        {
            key: '3',
            icon: <CalendarOutlined />,
            label: <Link to="/events" onClick={startLoading}>Events</Link>
        },
        {
            key: '4',
            icon: <ShopOutlined />,
            label: <Link to="/distributers" onClick={startLoading}>Distribute</Link>
        },
        {
            key: '5',
            icon: <InfoCircleOutlined />,
            label: <Link to="/about" onClick={startLoading}>About</Link>
        },
        {
            key: '6',
            icon: <ContactsOutlined />,
            label: <HashLink to="#contact-us-section" onClick={startLoading}>Contact</HashLink>
        }
    ];

    return (
        <div>
            {loading && (
                <div className="loading-bar">
                    <div className="progress" />
                </div>
            )}
            <Header className="navbar__header__complicated_class_name_for_layout">
                <div className="navbar__logo__complicated_class_name_for_logo">
                    <Link to="/" className="navbar__logo__link__complicated_class_name_for_logo_link" onClick={startLoading}>
                        <img src={logo} alt="Logo" className="navbar__logo__image__complicated_class_name_for_logo_image" />
                        <span className="navbar__company-name__complicated_class_name_for_company_name">Petroman</span>
                    </Link>
                </div>
                <Menu theme="dark" mode="horizontal" className="navbar__menu__complicated_class_name_for_menu" items={menuItems} />
            </Header>
        </div>
    );
};

export default Navbar;
