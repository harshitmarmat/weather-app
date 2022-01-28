import { Fragment } from 'react';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
}

export default Layout;
