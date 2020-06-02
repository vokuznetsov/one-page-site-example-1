import React from 'react'
import './style.scss'
import * as consts from './constants'
import guy from '../../static/images/guy.png'

class TrekDescription extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col trek-gateway">
                    <h3 className="serif" id="header">
                        A GETAWAY <br></br> FOR CREATIVES
                    </h3>
                    <div id="description">
                        {consts.DESCRIPTION}
                    </div>
                </div>
                <div className="col" id='guy'>
                    <img src={guy} alt='Video'></img>
                </div>
            </div>
        )
    }
}

export default TrekDescription;