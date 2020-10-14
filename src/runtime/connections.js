// React imports
import React from "react";
import { useSelector } from "react-redux";

// Component definition
const BirdConnections = (props) => {
    const isConfigLoaded = useSelector(state => state.config.loaded);
    const connections = useSelector(state => state.filter.connections);

    if (isConfigLoaded && (connections.length || (props.connections && props.connections.length))) {
        let cons = props.connections || connections;
        let sites = cons.length;
        let countries = Array.from(new Set(cons.map(item => item.split(",")[2].trim()))).length;
        let states = Array.from(new Set(cons.filter(item => item.indexOf("United States") > -1).map(item => item.split(",")[1].trim()))).length;
        let cities = Array.from(new Set(cons.filter(item => item.indexOf("United States") > -1).map(item => item.split(",")[0].trim()))).length;
        return (
            <div className="bird-connections">
                <div className="connection-wrapper">
                    <div className="connection-label">Sites</div>
                    <div className="connection-value">{sites}</div>
                </div>
                <div>
                    <div className="connection-label">Countries</div>
                    <div className="connection-value">{countries}</div>
                </div>
                <div>
                    <div className="connection-label">States</div>
                    <div className="connection-value">{states}</div>
                </div>
                <div>
                    <div className="connection-label">Cities</div>
                    <div className="connection-value">{cities}</div>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default BirdConnections;
