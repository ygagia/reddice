import React from 'react';

class Greetings extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-3">Hello, John!!!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </div>
        );
    }
}

export default Greetings;