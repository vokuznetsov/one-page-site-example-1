import React from 'react'
import './style.scss'

class VerticalLine extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col position">
                    <div className="dot"></div>
                    <div className="line"></div>
                    <div className="dot"></div>
                </div>
            </div>
        )
    }
}

export default VerticalLine;