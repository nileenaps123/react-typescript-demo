  import './App.css';
  import {Greet} from './components/Greet'
  import {Person} from './components/Person'
  import {PersonList} from './components/PersonList'

function App() {
  const personName={
    fname:'Bruce',
    lname:'Wayne'
  }
  const nameList=[
    {
    fname:'Bruce',
    lname:'Wayne'
  },
  {
    fname:'aami',
    lname:'Wayne'
  },
  {
    fname:'fer',
    lname:'Wayne'
  }
  ]
  return (
    <div className="App">
      <Greet name='Nileena' messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
