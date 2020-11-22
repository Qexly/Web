//import React from 'react';

function PlainList(props) {
    const numbers = props.numbers;
    let elements = numbers.map((item, index, array) => {
        return(
            <li key={item.toString()}>{item}</li>
        )
    })

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default PlainList;