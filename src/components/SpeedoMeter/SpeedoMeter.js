import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

const SpeedoMeter = (props) => {
    return (
        <div>
            <ReactSpeedometer
                value={props.value*999}
                currentValueText="Analysis"
                segments={4}
                customSegmentLabels={[
                  {
                    text: "Mostly False",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "11px",
                  },
                  {
                    text: "Likely False",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "12px",
                  },
                  {
                    text: "Likely True",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "12px",
                  },
                  {
                    text: "Mostly True",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "11px",
                  },
                ]}
            />
        </div>
    );
};

export default SpeedoMeter;