"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await axios.get(`http:///localhost:5000/user/getbyid/${id}`);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .put("http://localhost:5000/user/update/" + id, values)
        .then((response) => {
          // console.log(response.status)
          // resetForm()
          toast.success("User Updated Successfully");
          router.push("/manageUser");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <>
        {/* Hero */}
        <div className="relative overflow-hidden mt-3">
          <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
            <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
              {/* Title */}
              <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Solving problems for every{" "}
                <span className="text-blue-600">team</span>
              </h1>
              <p className="mt-3 text-base text-gray-500">
                Built on standard web technology, teams use PreLine to build
                beautiful cross-platform hybrid apps in a fraction of the time.
              </p>
              {/* End Title */}
              <div className="mt-8 grid">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    className="w-4 h-auto"
                    width={46}
                    height={47}
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </div>
              <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6">
                Or
              </div>
              {/* Form */}
              {userData !== null ? (
                <Formik initialValues={userData} onSubmit={signUpForm}>
                  {(updateForm) => {
                    return (
                      <form onSubmit={signUpForm.handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="hs-hero-name-2"
                            className="block text-sm font-medium"
                          >
                            <span className="sr-only">Full name</span>
                          </label>
                          {signUpForm.errors.name && signUpForm.touched.name ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.name}
                            </div>
                          ) : null}
                          <input
                            type="text"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Full name"
                            id="name"
                            onChange={updateForm.handleChange}
                            value={updateForm.values.name}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="hs-hero-email-2"
                            className="block text-sm font-medium"
                          >
                            <span className="sr-only">Email address</span>
                          </label>
                          {signUpForm.errors.email &&
                          signUpForm.touched.email ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.email}
                            </div>
                          ) : null}
                          <input
                            type="email"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Email address"
                            id="email"
                            onChange={updateForm.handleChange}
                            value={updateForm.values.email}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="hs-hero-password-2"
                            className="block text-sm font-medium"
                          >
                            <span className="sr-only">Password</span>
                          </label>
                          {signUpForm.errors.password &&
                          signUpForm.touched.password ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.password}
                            </div>
                          ) : null}
                          <input
                            type="password"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Password"
                            id="password"
                            onChange={updateForm.handleChange}
                            value={updateForm.values.password}
                          />
                        </div>
                        <div className="grid">
                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              ) : (
                <p>Loading......</p>
              )}
            </div>
          </div>
          <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover" />
          {/* End Col */}
        </div>
        {/* End Hero */}
      </>
    </div>
  );
};

export default UpdateUser;
