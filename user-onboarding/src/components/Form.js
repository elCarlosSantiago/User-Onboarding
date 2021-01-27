import react from 'react';

export default function Form(props) {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <label htmlFor="ToS">
          Terms of Service
          <input type="checkbox" name="ToS" />
        </label>
        <label htmlFor="role">
          Role
          <select>
            <option value="">- Select an option -</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="instructor">Instructor</option>
            <option value="Team Lead">Team Lead</option>
          </select>
        </label>
      </form>
    </div>
  );
}
