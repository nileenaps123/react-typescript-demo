import './App.css';
import {List} from  './components/generics/List'  
function App() {
    
  return (
    <div className="App">
      <List items={['Batman','wonderwoman','super man']}
      onClick={(item)=>console.log(item)}></List>
    </div>
  );
}

export default App;
