import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from "styled-components";
const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color : ${props => (props.isvalid ? "red" : "black")}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props =>props.isvalid ?"red" : "#ccc"};
  font: inherit;
  background: ${props => props.isvalid ? "#ffd7d7" : ""}
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]= useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length ===0){
      setIsValid(false);
      return;
    }
   
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isvalid={!isValid}>
        <label >Course Goal</label>
        <input type="text"  onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
