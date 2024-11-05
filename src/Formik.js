import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios  from 'axios'

const Formik = () => {

   const formik = useFormik({
      initialValues:{
        username:"",
        email:"",
        password:""
      },
      validationSchema:yup.object({
        username:yup.string().trim().min(4, "username cannot be less than 4 characters").required("username is required"),
        email:yup.string().email("Must be a valid email").trim().required("email is required"),
        password:yup.string().trim().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password must have atleast one uppercase,a special character and an integer.").required("password is required")
      }),
      onSubmit:async(value)=>{
        try {
          console.log(value);
          const response =  await axios.post("http://localhost:3245/posts")
           if (response) {
            toast.success("registration successful")
           }
        } catch (error) {
          toast.error("error occured")
        }
        formik.setValues({
          username:"",
          email:"",
          password:""
         })
      }
   })
   console.log(formik.errors);
   console.log(formik.touched);
   
   
  return (
    <>
    <form className='mx-auto w-50 shadow px-3 py-3 ' onSubmit={formik.handleSubmit} action="">
       <div className='form-group mt-3'>
        <label htmlFor="username">Username</label>
        <input value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' className='form-control' type="text" />
        <small className='text-danger'>{formik.touched.username ? formik.errors.username : ""}</small>
       </div>
       <div className='form-group mt-3'>
        <label htmlFor="username">email</label>
        <input value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className='form-control' type="text" />
        <small className='text-danger'>{formik.touched.email? formik.errors.email : ""}</small>
       </div>
       <div className='form-group mt-3'>
        <label htmlFor="username">password</label>
        <input value={formik.values.password}  onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' className='form-control' type="text" />
        <small className='text-danger'>{formik.touched.password ? formik.errors.password : ""}</small>
       </div>
       <button type='submit'>
        Register
       </button>
       <ToastContainer/>
    </form>

    </>
  )
}

export default Formik