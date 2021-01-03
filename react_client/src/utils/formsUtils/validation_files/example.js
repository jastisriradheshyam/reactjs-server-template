export default function validate(values) {

  let errors = {};

  if (!values.email) {
    errors.email = 'Email ID is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email ID is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  console.log("output of form validater login form :->", errors);
  return errors;
}
