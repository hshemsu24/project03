import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from '../components/Flashcard'
import champsLogo from './assets/champs.png'

const cardFacts = [
    {question: "Which club has won the most champions league titles?" , answer: "Real Madrid"}, 
    {question: "Which player has scored the most Champions League goals?" , answer: "Cristiano Ronaldo"}, 
    {question: "Which player has scored the most Champions League goals for one club?" , answer: "Lionel Messi (Barcelona)"},
    {question: "Who is the youngest goalscorer in Champions League history?", answer: "Ansu Fati (17 years 40 days"},
    {question: "Which league has the most Champions League winners?", answer: "Spanish League"}, 
    {question: "What year did the Champions League change from the European Champion Clubs’ Cup to the Champions League?", answer: "1992"}, 
    {question: "Which team won the first ever Champions League Title in the 1955-56 season?", answer: "Real Madrid"}, 
    {question: "Behind Messi and Ronaldo, who has the most Champions League assists?", answer: "Di Maria"}, 
    {question: "Who has played the most Champions League minutes in total?", answer: "Iker Casillas"}, 
    {question: "Who has scored the most Champions League penalties after Ronaldo and Messi?", answer: "Lewandowsi"}

];


function App() {

  
 
  return (
    <>
      <div>
        <img src={champsLogo} className= "logo" />
        <h1>Champions League Facts</h1>
      </div>
      <p className="read-the-docs">
        Think you know ball? Test your champions league knowledge with these flashcards!
      </p>

      <h4>Number of Cards: {cardFacts.length}</h4>
      
      
      
      <div className='cards'>
        <Flashcard cardFacts = {cardFacts}/>
      </div>
      
    </>
  )
}

export default App
