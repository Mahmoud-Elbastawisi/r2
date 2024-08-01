import './App.css';
import P from './comp/comp2/products';
import B from './comp/comp3/bar';
import {prs} from './comp/products/product'



function App() {
  return (
    <div className="App">
      <B></B>
      <P data={prs}/>
    </div>
  );
}

export default App;
