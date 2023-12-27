// components/Layout.js
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';



const Layout = ({ children }) => {
    return (
        <div className='text-foreground bg-background bg-opacity-50 backdrop-blur-lg'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
