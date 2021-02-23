import React from 'react';

const logo = (type) => {
    switch(type) {
        case "Visa":
            return "/img/visa.png";
        case "Master Card":
            return "/img/master-card.svg";
        default:
            return 'no image';
    }
}

const CreditCard = (props) => {
    console.log(props)

    return (
        <div style = {{backgroundColor: props.bgColor, color: props.color}}>
            <div>
                <img src={logo(props.type)} alt= 'logo'/> 
            </div>
            <div>
                •••• •••• •••• {props.number.slice(-4)}
            </div>
            <div>
                Expires {props.expirationMonth}/{props.expirationYear.toString().substr(-2)}
            </div>
            <div>
                {props.bank}
            </div>
            <div>
                {props.owner} 
            </div>
        </div>
    );

}

export default CreditCard;