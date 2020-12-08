import React from 'react';
import Select from 'react-dropdown-select';

const CheckBoxes = (props) => {
    return (
        <div>
            <Select 
                values={props.selectedValues}
                options={props.values}
                multi={true}
                labelField="algo"
                valueField="algoKey"
                placeholder="Select algorithms.."
                onChange={(values) => props.selectChange(values)}
            />
        </div>
    );
};

export default CheckBoxes;