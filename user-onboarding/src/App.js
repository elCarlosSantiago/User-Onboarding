import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';
import Form from './components/Form';
import User from './components/User';

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
  role: '',
};
const defaultErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
  role: '',
};

function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  const validate = (inputName, inputValue) => {
    yup
      .reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setErrors({ ...errors, [inputName]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] });
      });
  };

  const change = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const postNewData = (newData) => {
    axios
      .post('https://reqres.in/api/users', newData)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialValues);
        debugger;
      })
      .catch((err) => {
        debugger;
        console.error(err);
      });
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

  //side effects
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <Form
        formValues={formValues}
        change={change}
        submit={submit}
        buttonDisabled={buttonDisabled}
        errors={errors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
