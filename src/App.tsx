  import './App.css';
  import {Status} from './components/Status'
  import {Heading} from './components/Heading'
  import {Oscar} from './components/Oscar'
  import {Greet} from './components/Greet'


function App() {

  return (
    <div className="App">
      <Status status='loading'/>
      <Heading>Place holder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Decaprio</Heading>
      </Oscar>
      <Greet name="unni" isLoggedIn={false}></Greet>
    </div>
  );
}

export default App;
