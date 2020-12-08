import classes from './ContentBox.module.css';
import React from 'react';

const ContentBox = (props) => {
    return (
        <div>
            <textarea 
            className={classes.contentBox}
            rows={5}
            cols={100}
            onChange={(e)=>props.changeText(e)}
            value={props.text}
            placeholder="Enter Content here ..."
            />
        </div>
    );
};

export default ContentBox;