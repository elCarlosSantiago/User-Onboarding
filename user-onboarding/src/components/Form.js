import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  input {
    margin: 1% 0 1% 1%;
  }
  label {
    margin: 1% 0 1% 1%;
  }
  select {
    margin: 0 0 1% 1%;
  }
  button {
    margin: 0 0 1% 1%;
  }
`;

const StyledErr = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: red;
  font-family: monospace;
  font-size:0.8rem;
`;

export default function Form(props) {
  const { formValues, change, submit, buttonDisabled, errors } = props;

  const onChange = (evt) => {
    const { name, type, checked, value } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <StyledErr>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        <div>{errors.role}</div>
      </StyledErr>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <br />
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Full Name"
          />
        </label>
        <label htmlFor="email">
          E-mail
          <br />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            placeholder="Min. 8"
          />
        </label>
        <label htmlFor="terms">
          Terms of Service
          <input
            type="checkbox"
            name="terms"
            value={formValues.terms}
            checked={formValues.terms}
            onChange={onChange}
          />
        </label>
        <label htmlFor="role">
          Role
          <select name="role" value={formValues.role} onChange={onChange}>
            <option value="">- Select an option -</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="instructor">Instructor</option>
            <option value="Team Lead">Team Lead</option>
          </select>
        </label>
        <button className ='submitBtn' disabled={buttonDisabled}>Submit!</button>
      </StyledForm>
    </div>
  );
}
