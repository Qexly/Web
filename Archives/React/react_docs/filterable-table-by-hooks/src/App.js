import './App.css';
import {data} from './data.js';
import FilterableTable from './FilterableTable.jsx';

function App() {
  return (
   <div>
     <FilterableTable products={data} />
   </div>
  );
}

export default App;
