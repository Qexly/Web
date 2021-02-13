import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';

const styles = {paddingTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '500px'}

const useLogger = (value) => {
  useEffect(() => {
    console.log('value changed: ', value)
  }, [value])
}

const useInput = (initialValue) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  const clear = () => setValue('');

  return {value, onChange, clear};
}

function App() {

  const input = useInput('');
  const input2 = useInput('');

  useLogger(input.value);

  return (
    <div style={styles}>
      <input type="text" value={input.value} onChange={input.onChange} />
      <button onClick={input.clear}>Очистить</button>
      <p>{input.value}</p>

      <input type="text" value={input2.value} onChange={input2.onChange} />
      <button onClick={input2.clear}>Очистить</button>
      <p>{input2.value}</p>
    </div>
  )
}

export default App;



















/*



*/