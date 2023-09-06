import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Bookstore'

function App() {
  
  const actors = ['sakib', 'bappa raz', 'modhumita','challu khan'];

  const books = [
    {id: 1, name: 'physics', price: '100'},
    {id: 2, name: 'biology', price: '300'},
    {id: 3, name: 'chemistry', price: '150'},
    {id: 4, name: 'sociology', price: '170'},
  ];

  const singers = [
     { name: 'Mahfuz', age: 30},
     { name: 'Rahim', age: 39},
     { name: 'Majumder', age:56},
  ];

  return (
    <>   
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name="Tom Cruise"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
     

      {/* <Todo 
      task="Learn react" 
      isDone={true}>

      </Todo>
      <Todo 
      task="Explore Core Concepts" 
      isDone={true}>

      </Todo>
      <Todo 
      task="Try JSX" 
      isDone={false}>

      </Todo> */}
      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Student grade={5} score="79"></Student>

      <Developer></Developer> */}
     
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This is device is a {props.name} and the price is {props.price}</h2>
}


function Person(){
  const age = 25;
  const money = 20;
  const person = {name : 'sakib', age: 12};
  return <h3>I am a person. My name is {person.name} and my age is {person.age} with age: {age + money} and my net worth is : {money}</h3>
}

const {grade,score} = {grade: '7', score: '99'};
//destructuring function arguments
function Student({grade = 1,score = 0}){
  console.log(grade,score);
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>Grade: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer(){
  
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px',

  }
  return(
      <div style={{
        margin: '20px',
        padding: '20px',
        border: '2px solid purple',
        borderRadius: '20px',
    
      }}>
        <h5>Devo Devo</h5>
        <p>Coding :- </p>
      </div>
  )
}

export default App
