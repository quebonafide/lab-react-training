import React from 'react';

const IdCard = (props) => {
    console.log(props.firstName)
    return (
        <div>
            <div>
                <img src={props.picture} alt= 'face'/> 
            </div>
            <div>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height} m</p>
                <p><strong>Birth: </strong>{props.birth.getDate()}/{props.birth.getMonth()}/{props.birth.getFullYear()}</p>
            </div>
        </div>
    );

}

export default IdCard;