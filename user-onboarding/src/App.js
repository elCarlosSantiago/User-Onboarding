import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './components/Form';

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
  role: '',
};

function App() {
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  const change = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const postNewData = (newData) => {
    setSavedFormInfo([newData, ...savedFormInfo]);
    setFormValues(initialValues);
  };

  const submit = (evt) => {
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
      role: formValues.role,
    };
    postNewData(newData);
  };

  return (
    <div className="App">
      <Form formValues={formValues} change={change} submit={submit}/>
    </div>
  );
}

export default App;
