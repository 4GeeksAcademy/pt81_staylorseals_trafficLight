import React, { useState } from "react";
import "../../styles/index.css"; 



const TrafficLight = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (color) => {
        setSelected(color);
    };

    return (
        <div className="traffic-light">
            <div 
                className={`light red ${selected === 'red' ? 'glow' : ''}`}
                onClick={() => handleClick("red")}
            ></div>
            <div 
                className={`light yellow ${selected === 'yellow' ? 'glow' : ''}`}
                onClick={() => handleClick("yellow")}
            ></div>
            <div 
                className={`light green ${selected === 'green' ? 'glow' : ''}`}
                onClick={() => handleClick("green")}
            ></div>
        </div>
    );
};

export default TrafficLight;