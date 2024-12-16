import { useState } from "react";
import "./App.css";


const FaqItem = ({question, answer}) =>{
  const [Show, setShow] = useState (false);
  const toggleShow = () => {
    setShow(!Show);
  };

  return (
    <div className={`faq-item ${Show ? "active" : ""}`}>
    <div className="faq-item-header"  onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
        {answer}
    </div>
    </div>
    </div>
  )
};
const FaqAccordion = ({data}) =>{
  return(
    <div className='faq-accordion'>
      <h2>FAQs React JS</h2>
      {data.map((item) => (
         <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      ))}
     
    </div>
  )
};

const data = [
  {
    id: 1, question:"What is React ?", answer: "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components."},
  {
    id: 2, question:"What is JSX ?", answer: "JSX stands for JavaScript XML.JSX allows us to write HTML in React.JSX makes it easier to write and add HTML in React."},
  {
    id: 3, question:"What are the main concepts of React ?", answer: "Some of the main concepts of React are: Components, Props, State, Hook, Lifecycle methods, and JSX"},
  {
    id: 4, question:"What is a Hook ?", answer: "Hooks allow us to 'hook' into React features such as state and lifecycle methods."},
  {
    id: 5, question:"Why Should I Learn ES6 ?", answer: "React uses ES6, and you should be familiar with some of the new features like:Classes,Arrow Functions,Variables (let, const, var),Array Methods like .map(),Destructuring,Modules,Ternary Operator,Spread Operator"},
  {
    id: 6, question:"React ES6 Array Methods ?", answer: "There are many JavaScript array methods.One of the most useful in React is the .map() array method.The .map() method allows you to run a function on each item in the array, returning a new array as the result.In React, map() can be used to generate lists."},
]

export const App = () => {
  return (
    <div className='App'>
      <FaqAccordion data = {data}/>
    </div>
  )
}

export default App;
