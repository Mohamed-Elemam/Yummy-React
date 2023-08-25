import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  const logger = () => {
    console.log(formik.values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3 ,"The name can't be less than 3 chrachters")
      .max(25, "The name can't exceed 25 chrachters"),
    // Special characters and numbers not allowed
    email: Yup.string().required(" Email not valid exemple@yyy.zzz").email(),
    phone: Yup.string().required("Phone number is required").matches(/^01[0-9]{8}/,'phone must be egyptain number'),
    // Enter valid Phone Number
    age: Yup.number().min(10 , 'Age  must be between 10 and 99').max(99,'Age  must be between 10 and 99').required("Age is required"),
    //is must be between 10 and 99"
    password: Yup.string()
    //TODO fix sepelling remove logger and line 28 ? study the side bar // on click submit the modal appear and 
    //TODO and then all in put are zero put links in .env
    
      .required("Password is required ")
      .matches(/^(?=.*[A-Z])(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[0-9]){8,}/,' password must be 8 letters that starts with a capital letter and contain one special charachter and one number'),
    rePassword: Yup.ref('password')
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      rePassword: ""
    },
    validationSchema,
    onSubmit: logger
  });

  // console.log(formik)
  // useEffect( logger ,[])

  return (
    <>
      <form
        className="d-flex align-items-center justify-content-center contactUs  "
        onSubmit={formik.handleSubmit}
      >
        <div className="container  py-5">
          <div className="">
            <div className="row my-3 ">
            {/* name=============================== */}

              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Your Name "
                  className="form-control rounded-2 w-75 mx-auto my-3 "
                  id="name"
                  name="name"
                  maxLength="25" 
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-danger w-75  my-3 mx-auto mx-auto">
                    * {formik.errors.name}
                  </div>
                ) : null}
              </div>
            {/* email=============================== */}

              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Enter Your Email "
                  className="form-control rounded-2  w-75 mx-auto my-3 emailVal"
                  id="email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-danger w-75  my-3 mx-auto  ealert">
                   * {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row my-3">
            {/* phone=============================== */}

              <div className="col-md-6">
                <input
                  type="tel"
                  placeholder="Enter Your Phone"
                  className="form-control rounded-2 w-75 mx-auto my-3 phoneVal"
                  id="phone"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="text-danger w-75  my-3 mx-auto  ">
                   * {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            {/* age=============================== */}

              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Enter Your age "
                  className="form-control rounded-2 w-75 mx-auto my-3  "
                  id="age"
                  name="age"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />

                {formik.errors.age && formik.touched.age ? (
                  <div className="text-danger w-75  my-3 mx-auto  ">
                   * {formik.errors.age}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row my-3">
            {/* password=============================== */}
              <div className="col-md-6">
                <input
                  type="password"
                  placeholder="Enter Your Password "
                  className="form-control rounded-2 w-75 mx-auto my-3 "
                  id="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-danger w-75  my-3 mx-auto  ">
                   * {formik.errors.password}
                  </div>
                ) : null}
               
              </div>

            {/* re-password=============================== */}
              <div className="col-md-6">
                <input
                  type="password"
                  placeholder="RePassword "
                  className="form-control rounded-2 w-75 mx-auto my-3 "
                  id="rePassword"
                  name="rePassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                />

                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="text-danger w-75  my-3 mx-auto  ">
                   * {formik.errors.rePassword}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              className="btn btn-outline-danger d-block my-3 mx-auto my-3 "
              // onSubmit={formik.handleSubmit}
              type="submit"
              disabled={formik.isValid &&!formik.dirty}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
