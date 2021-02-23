import React from 'react';

const greet = (choice) => {
    switch(choice) {
        case "en":
            return "Hello";
        case "fr":
            return "Bonjour";
        case "de":
            return "Guten Tag";
        case "es":
            return "Hola";
        default :
            return "no language provided";
    }
}
const Greetings = (props) => {
    console.log(props)

    return (
        <div>
            {greet(props.lang)} {props.children}
        </div>
    );

}

export default Greetings;