import React, {useState, useEffect} from 'react';

function Example(props) {

    let [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали на кнопку ${count} раз`;
    })

    useEffect(() => {
        let timer = setInterval(() => console.log('JSX размонтируется, а таймер останется, если не убрать его ниже'), 1000);
        return () => {
            alert('unmount');
            clearInterval(timer);
        }
    })

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