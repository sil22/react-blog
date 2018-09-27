import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 50) {
    errors.username = 'Must be less than 50 characters'
  } else if (values.username.length < 5) {
    errors.username = 'Must be more than 5 characters'   
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.pass){
      errors.pass = 'Required'
  } else if (values.pass.length < 6){
      errors.pass = 'Must be more than 6 characters'
  } 
  if (!values.password_confirmation){
    errors.password_confirmation = 'Required';
  } else if(!(values.pass === values.password_confirmation)){
      errors.password_confirmation = "Passwords do not match!"
  }
  return errors
}

// const warn = values => {
//   const warnings = {}
//   if (values.age < 19) {
//     warnings.age = 'Hmm, you seem a bit young...'
//   }
//   return warnings
// }

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SignupFormFinal = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="pass" type="password" component={renderField} label="Password" />
      <Field name="password_confirmation" type="password" component={renderField} label="Password Confirmation" />

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignupFormFinal', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
//  warn // <--- warning function given to redux-form
})(SignupFormFinal)