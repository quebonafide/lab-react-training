import React from 'react';


const Random = (props) => {
    console.log(props)

    return (
        <div>
            Random value between {props.min} and {props.max} ={`>`} {Math.floor(Math.random()*(props.max - props.min + 1)) + props.min}
        </div>
    );

}

export default Random;