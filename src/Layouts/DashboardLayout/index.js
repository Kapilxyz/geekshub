import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'

function Layout(props) {
    return (
        <div  id="wrapper">
            <HeaderComponent />
            {props.children}
            <FooterComponent />
        </div>
    )
}

export default Layout;
