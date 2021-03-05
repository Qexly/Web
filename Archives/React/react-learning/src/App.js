import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';


function App() {

  let [count, setCount] = useState(0);
  let [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'purple' : null,
  }

  const generateItems = useCallback( () => {
    console.log('сложный запрос');
    return new Array(count).fill(null).map((_, index) => `Элемент №${index + 1}`);
  }, [count]);
  

  return (
    <div>
      <h2 style={styles}>Счетчик: {count}</h2>
      <button onClick={(e) => setCount(prevCount => ++prevCount)}>Прибавить</button>
      <button onClick={(e) => setColored(prevCount => !prevCount)}>Покрасить</button>
      <ItemList getItems={generateItems} />
    </div>
  )
}

const ItemList = (props) => {
  let {getItems} = props;

  const[items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems())
  }, [getItems]);

  return (
    <ul>
      {
        items.map((item, index) =><li key={index}>{item}</li> )
      }
    </ul>
  )
}

export default App;



















/*



*/