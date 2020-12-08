import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
 
const DropDown = (props) => {
    return (
        <div>
            <Dropdown 
            options={props.sources} 
            onChange={(e) => props.changeSource(e)} 
            value={props.source} 
            placeholder="Select source" />
        </div>
    );
};

export default DropDown;