import { SetStateAction, useState } from 'react';

/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
export default function Form() {
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');

  //string could be SetStateAction<string> 
  function handleFirstNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setFName(e.target.value);
  }

  function handleLastNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setLName(e.target.value);
  }

  function handleReset() {
    setFName('');
    setLName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
