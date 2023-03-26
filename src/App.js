// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import style from './appStyle.module.css';
import Form from './components/Form';
import LifeCycle from './components/LifeCycle';
import Product from './components/Product';
import Routing from './components/Routing';
import {HookCounter} from './components/HookCounter';
import UseEffect from './components/UseEffect';
import UseStateWithPrevState from './components/UseStateWithPrevState';
import A from './components/A';
import Vikas from './components/Vikas';
import Destrucuring_Array_Objects from './components/Destrucuring_Array_Objects';

// create element using  JSX
// const name = <h2>Welcome to React</h2>

// create element using React syntax without JSX
// const newElement = React.createElement('h3', {className:'newElement'} , 'This is created h3 Tag' );

// const test = function(){
//   alert("Hello Pal");
// }
// const test = () =>{
//   alert("Hello Pal");
// }

// // const age = function(a){
// //   if(a>8){
// //     return <span>You are eligable</span>
// //   }
// //   else return <span>You are not eligable</span>
// // }

// // Same fuction using arrow syntax
// const age = (a) =>{
//   if(a>8){
//     return <span>You are eligable</span>
//   }
//   else return <span>You are not eligable</span>
// }

// *************Below is a functional Component************************
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello Mrinmoy!</h1> 
//      {name}
//      {newElement}
//      <button onClick={test}>Get Alert</button>
//      {age(19)}
//     </div>
//   );
// }


// *****************Below is a class Component**************************
class App extends React.Component{

  render(){
    const numbers = [3, 4, 5, 6];
    return (
      
      <div className='App'>
        <Routing/>
        <Header name='Mrinmoy' last='Pal'>
        <p>Mrinmoy is a web engineer</p> 
        </Header>
        <Header name= 'Ajay' last='Suneja'>
          <a href='./'>Click here</a>
          </Header>
        <Header name='rahul'/> 
        <CHeader name='Tanmay' last='Paul' /> 
        <Channel/>
        <FunctionClick/>
        <CFunctionClick roll='32' num={numbers}/>
        <Stylesheet isValue={true}/>
        <Inline/>
        
        <h2 className={style.success}>success</h2>
        <h2 className='error'>error</h2>
        <Form></Form>
        <LifeCycle/>
        <Product/>
        <HookCounter/>
        <UseEffect/>
        <UseStateWithPrevState/>
        <A/>
        <Vikas/>
        <Destrucuring_Array_Objects library="React.js"/>
      </div>
    );
  }
}

export default App;
