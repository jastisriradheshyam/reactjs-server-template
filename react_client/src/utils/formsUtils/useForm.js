import { useState, useEffect } from 'react';

const useForm = (callback, validate, data) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    } else if (isSubmitting) {
      setIsSubmitting(false)
      if (scrolltoError instanceof Function)
        scrolltoError()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(errors => ({ ...errors, [event.target.name]: "" }))
  };

  const handleFile = (event) => {
    event.persist();
    console.log('fileUPloaded:==>', event.target.files[0])
    setValues(values => ({ ...values, [event.target.name]: event.target.files[0] }));
    setErrors(errors => ({ ...errors, [event.target.name]: "" }))
  }

  return {
    handleChange,
    handleSubmit,
    handleFile,
    values,
    errors,
  }
};

export default useForm;
