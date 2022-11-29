import { useState, useRef } from 'react'
import './App.css'

function App() {
  const emailRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  return (
    <div className="App">
       <h1>Form</h1>
      <label htmlFor="email">Your email address</label>
      <br />
      <input type="text" name="email" ref = {emailRef} />
      <br />

      <label htmlFor="first-name">Your firstname : </label>
      <br />
      <input type="text" name="first-name" ref = {firstnameRef} />
      <br />

      <label htmlFor="last-name">Your last name : </label>
      <br />
      <input type="text" name="last-name" ref = {lastnameRef} />

      <br />
      <br />

      <button onClick = {function(){
        setEmail(emailRef.current.value)
        setfirstName(firstnameRef.current.value)
        setlastName(lastnameRef.current.value)
      }}>Submit the form</button>
      <br />
      <br />

      <div>
        Your email adress is : {email} <br />
        Your first name : {firstName} <br />
        Your last name : {lastName}
      </div>
    </div>
  );
}


export default App
