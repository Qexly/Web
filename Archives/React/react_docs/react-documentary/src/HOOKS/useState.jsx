import React, {useState} from 'react';

function Example(props) {

    let [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали на кнопку {count} раз</p>
            <button onClick={() => setCount(++count)}>
                Кнопка инкременeнта
            </button>
        </div>
    )
}

export default Example;