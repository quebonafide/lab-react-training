import React from 'react';

const DriverCard = (props) => {
    console.log(props)

    return (
        <div>
            <img style ={{height: "100px"}} src={props.img} alt= 'face'/> 
            {props.name}
            {"★".repeat(Math.round(props.rating))}{"☆".repeat(5 - Math.round(props.rating))}   
            {props.car.model} - {props.car.licensePlate}
        </div>
    );

}

export default DriverCard;