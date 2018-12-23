import React, { useRef } from 'react';

const AddForm = ({ onSubmit }) => {
  const inputEl = useRef(null);

  const handleFormSubmit = event => {
    event.preventDefault();

    if (inputEl.current.value) {
     onSubmit(inputEl.current.value);
     inputEl.current.value = '';
    }
  };

  return (
    <form className="App-form">
      <input ref={inputEl} type="text" />
      <button onClick={handleFormSubmit}>Add new task</button>
    </form>
  );
};

export default AddForm;
