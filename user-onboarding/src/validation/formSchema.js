import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address.'),
  password: yup.string()
  .required('No password provided.') 
  .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters & numbers.')
  .min(8, 'Password is too short - should be 8 chars minimum.'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms.'),
  role: yup.string().oneOf(['Team Lead', 'instructor', 'student', 'alumni'],'Role is required')
});
