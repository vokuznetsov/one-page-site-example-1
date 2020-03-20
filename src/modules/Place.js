import React from 'react';

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
                        <div className="col">
                            <h3> JUNE 03-06, 2016</h3>
                            <br></br>
                            <h4>A GETAWAY FOR CREATIVES</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h2 className="place serif float-left" id="tahoe">
                                TAHOE
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="row mt-7-vw">
            //     <h2 className="col serif place">
            //         <span>S. LAKE</span>

            //         <br></br>
            //         TAHOE
            //     </h2>
            //     <div id="trek-data">
            //         <h3> JUNE 03-06, 2016</h3>
            //         <h4>A GETAWAY FOR CREATIVES</h4>
            //     </div>
            // </div>
        )
    }
}

export default Place;