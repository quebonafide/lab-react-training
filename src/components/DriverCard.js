import React from 'react';
import '../App.css';

const DriverCard = (props) => {
    console.log(props)

    return (
        <div>
            <img className='driverPhoto' src={props.img} alt= 'face'/> 
            {props.name}
            {"★".repeat(Math.round(props.rating))}{"☆".repeat(5 - Math.round(props.rating))}   
            {props.car.model} - {props.car.licensePlate}
        </div>
    );

}

export default DriverCard;