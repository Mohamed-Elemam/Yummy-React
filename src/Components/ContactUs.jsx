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
      .min(5)
      .max(25, "The name can/'t exceed 25 chrachters"),
    // Special characters and numbers not allowed
    email: Yup.string().required(" Email not valid exemple@yyy.zzz").email(),
    phone: Yup.string().required("Phone number is required"),
    // Enter valid Phone Number
    age: Yup.number().required("Age is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z]/),
    rePassword: Yup.string()
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
          <div className="mx-auto text-center">
            <div className="row my-3 ">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Your Name "
                  className="form-control rounded-2 w-75 mx-auto my-3 nameVal"
                  id="name"
                  name="name"
                  maxLength="25" //*  <=== then no need for .max in yup schema
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
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
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row my-3">
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
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Enter Your age "
                  className="form-control rounded-2 w-75 mx-auto my-3  ageVal"
                  id="age"
                  name="age"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />

                {formik.errors.age && formik.touched.age ? (
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <input
                  type="password"
                  placeholder="Enter Your Password "
                  className="form-control rounded-2 w-75 mx-auto my-3 password1Val"
                  id="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.password}
                  </div>
                ) : null}
                <div
                  className="alert d-none alert-danger w-75 mx-auto my-3 p1alert"
                  role="alert"
                >
                  Enter valid password *Minimum eight characters, at least one
                  letter and one number:*
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="password"
                  placeholder="RePassword "
                  className="form-control rounded-2 w-75 mx-auto my-3 password2Val"
                  id="rePassword"
                  name="rePassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                />

                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert alert-danger w-75 mx-auto my-3 ealert">
                    {formik.errors.rePassword}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              className="btn btn-outline-danger d-block my-3 mx-auto my-3 "
              // onSubmit={formik.handleSubmit}
              type="submit"
              disabled={formik.isValid && !formik.dirty}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
