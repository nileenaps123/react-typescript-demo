  import './App.css';
  import {Status} from './components/Status'
  import {Heading} from './components/Heading'
  import {Oscar} from './components/Oscar'
  import {Greet} from './components/Greet'
  import {Button} from './components/Button'
  import {Input} from './components/Input'
  import {Container} from './components/Container'
  import {PersonList} from './components/PersonList'

function App() {
    const nameList = [
   {name: {
      fname: 'Bruce',
      lname: 'Wayne'
    }},
    {name:{
      fname: 'Clark',
      lname: 'Kent'
    }},
    {name:{
      fname: 'Princess',
      lname: 'Diana'
    }}
  ]

  return (
    <div className="App">
      <Status status='loading'/>
      <PersonList names={nameList} />
      <Heading>Place holder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Decaprio</Heading>
      </Oscar>
      <Greet name="unni" isLoggedIn={false}></Greet>
      <Button handleClick={(event,id)=>{
        console.log("Button Clicked",event,id)
        }}
        />
      <Input value='' handleChange={e=>console.log(e)}></Input>  
      <Container styles={{border:'1px solid black',padding:'lrem'}}></Container>
 
    </div>
  );
}

export default App;
