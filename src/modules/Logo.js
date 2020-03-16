import React from 'react';
import logo from '../static/images/logo.png'

class Logo extends React.Component {

    render() {
        return (
            <div className="col pt-6-vw">
                <h1 className="logo">
                    <a href="/">
                        <img src={logo} alt='Circles Co.'></img>
                    </a>
                </h1>
            </div>
        )
    }
}

export default Logo;