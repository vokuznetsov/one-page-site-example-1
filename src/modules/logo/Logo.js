import React from 'react';
import "./style.scss";
import logo from '../../static/images/logo.png'

class Logo extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col section">
                    <h1 className="logo">
                        <a href="/">
                            <img src={logo} alt='Circles Co.'></img>
                        </a>
                    </h1>
                </div>
            </div>
        )
    }
}

export default Logo;