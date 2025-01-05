import { useState } from "react";
import Header from "./compoonents/Header.jsx"
import UserInput from "./compoonents/UserInput.jsx"
import Results from "./compoonents/Results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn:8,
    duration:10
});
const inputIsValid = userInput.duration>=1;
function handleChange(inputIdentifier , newValue){
  setUserInput(prevUserInput=>{
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue
      }
  }) 
}
  return (
    <>
    <Header/>
    <UserInput userInput ={userInput}onChange={handleChange}/>
    {!inputIsValid && (<p className = "center">Please enter a duration greater than zero.</p>)}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
};

export default App
