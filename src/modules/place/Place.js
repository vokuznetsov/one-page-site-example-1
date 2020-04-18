import React from 'react';
//import './style.scss'

class Place extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="row mt-7-vw">
                        <div className="col">
                            <h2 className="place serif" id="lake">
                                S. LAKE
                            </h2>
                        </div>
                        <div className="col d-flex flex-column" id="date">
                            <h3> JUNE 03-06, 2016</h3>
                            <br></br>
                            <h4>A GETAWAY FOR CREATIVES</h4>
                        </div>
                    </div>

                    <div className="row ml-5">
                        <div className="col">
                            <h2 className="place float-left" id="tahoe">
                                TAHOE
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Place;