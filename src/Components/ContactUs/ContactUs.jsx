import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function ContactUs() {
  const handleSubmit = () => {
    Swal.fire({
      title: "Thank you for contacting us",
      text: "We will reach you soon",
      icon: "success",
    });
    formik.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "The name can't be less than 3 characters")
      .max(25, "The name can't exceed 25 characters"),
    email: Yup.string().required(" Email not valid exemple@yyy.zzz").email(),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0-9]{8}/, "phone must be egyptain number"),
    age: Yup.number()
      .min(10, "Age must be between 10 and 99")
      .max(99, "Age must be between 10 and 99")
      .required("Age is required"),
    password: Yup.string()
      .required("Password is required ")
      .matches(
        /^(?=.*[A-Z])(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[0-9]){8,}/,
        " password must be 8 letters that starts with a capital letter and contain one special charachter and one number"
      ),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null, "password and repassword must match"])
      .required("repassword is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form
        className="d-flex align-items-center justify-content-center contactUs  "
        onSubmit={formik.handleSubmit}
      >
        <div className="container  py-5">
          <div>
            <div className="row my-3 ">
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
              disabled={!formik.isValid || !formik.dirty}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Thank you</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
// Thank you for contacting us
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Done</button>
//       </div>
//     </div>
//   </div>
// </div>
