import React from 'react';
import '../App.css';

const NumbersTable = (props) => {

    let array = [];

    for(let i=1; i<=props.limit; i++) {
        array.push(i)
    }
    

    return (
        <div className= 'table'>
            {array.map(item => {
                return <div className= 'square' style = {item % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>{item}</div>
            })}
        </div>
    );

}

export default NumbersTable

