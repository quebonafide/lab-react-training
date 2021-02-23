import React from 'react';


const Rating = (props) => {
    console.log(props)

    return (
        <div>
            {"★".repeat(Math.round(props.children))}{"☆".repeat(5 - Math.round(props.children))}    
        </div>
    );

}

export default Rating;