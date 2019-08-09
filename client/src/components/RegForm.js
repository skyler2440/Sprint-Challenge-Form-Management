import React, {useEffect, useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DisplayPage from './DisplayPage'
function RegForm({ values, errors, touched, status }) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        if(status) {
            setUser([...user, status])
        }
    }, [status])
  return (
    <>
      <h1>Please Create an Account</h1>
      <Form className='form'>
        <div className='form-field-area'>
          {touched.username && errors.username && <p className='form-error'>{errors.username}</p>}
          <Field className='form-field'  type="text" name="username" placeholder="User Name" />
        </div>
        <div className='form-field-area'>
          {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}
          <Field className='form-field'  type="password" name="password" placeholder="Password" />
        </div>
        <div className='form-field-area'>
          {touched.confirmPassword && errors.confirmPassword && (
            <p className='form-error'>{errors.confirmPassword}</p>
          )}
          <Field className='form-field' 
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type='submit'>Submit</button>
      </Form>
      {user.map(users => (
          <>
<DisplayPage username={users.username} password={users.password}/>
          </>
      ))}
    </>
  );
}

const FormikRegForm = withFormik({
  mapPropsToValues({
    username,
    password,
    confirmPassword
}) {
    return {
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("User Name is Required")
      .max(50, "Your name is too long"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    )
  }),

  handleSubmit(values, formikBag) {
    
      axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
            // console.log(res.data)
            formikBag.setStatus(res.data)
        })
        .catch(err => console.log(err.response));
    
  }
})(RegForm);
export default FormikRegForm;