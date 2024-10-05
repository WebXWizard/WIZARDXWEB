"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Fill your FirstName")
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be at most 15 characters"),

  //   lastName: Yup.string()
  //     .required("LastName is required")
  //     .min(3, "Name must be at least 3 characters")
  //     .max(15, "Name must be at most 15 characters"),

  email: Yup.string()
    .email("please enter a valid email address")
    .required("Email is required"),

  phoneNumber: Yup.string()
    .min(10, "min 10 numbers")
    .max(12, "max 10 numbers")
    .required("Phone number is required"),

  //   password: Yup.string()
  //     .min(8, "Password must be at least 8 character")
  //     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  //     .matches(/[A-Z]/, "Password must contain at least one uppercase")
  //     .matches(/0-9]/, "Password must contain at least one number")
  //     .matches(
  //       /[!@#$%^&*()<>?"":{}[]]/,
  //       "Password must contain at least one spacial letter"
  //     )
  //     .required("password is required"),

  details: Yup.string()
    .min(10, " Details must be at least 10 characters")
    .max(80, " Details must be at least 80 characters"),
});
const ContactUs = () => {
  const contactUsForm = useFormik({
    initialValues: {
      firstName: "",
      //   lastName: "",
      email: "",
      phoneNumber: "",
      details: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      toast.success("Form Filled Successfully");
    },
    validationSchema: contactSchema,
  });
  return (
    <>
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Contact us</h1>
            <p className="mt-1 text-xl">
              We'd love to talk about how we can help you.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            {/* <h2 className="mb-8 text-2xl font-semibold">
              Contact Form
            </h2> */}
            <form onSubmit={contactUsForm.handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-fName-contacts-1"
                      className="block mb-2 text-sm"
                    >
                      Full Name
                    </label>
                    {contactUsForm.errors.firstName &&
                    contactUsForm.touched.firstName ? (
                      <div className="text-red-500">
                        {contactUsForm.errors.firstName}
                      </div>
                    ) : null}
                    <input
                      type="text"
                      name="firstName"
                      id="hs-fName-contacts-1"
                      onChange={contactUsForm.handleChange}
                      value={contactUsForm.values.firstName}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  {/* <div>
                    <label
                      htmlFor="hs-lName-contacts-1"
                      className="block mb-2 text-sm"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lName-contacts-1"
                      id="hs-lName-contacts-1"
                      onChange={contactUsForm.handleChange}
                      value={contactUsForm.values.firstName}
                      className="py-3 px-4 block w-full border-2 border-gray-200  rounded-lg text-sm"
                    />
                    {contactUsForm.errors.lastName &&
                    contactUsForm.touched.lastName ? (
                      <div className="text-red-500">
                        {contactUsForm.errors.lastName}
                      </div>
                    ) : null}
                  </div> */}
                </div>
                {/* End Grid */}
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm"
                    >
                      Email
                    </label>
                    {contactUsForm.errors.email &&
                    contactUsForm.touched.email ? (
                      <div className="text-red-500">
                        {contactUsForm.errors.email}
                      </div>
                    ) : null}
                    <input
                      type="email"
                      name="email"
                      id="hs-email-contacts-1"
                      autoComplete="email"
                      onChange={contactUsForm.handleChange}
                      value={contactUsForm.values.email}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hs-phone-number-1"
                      className="block mb-2 text-sm"
                    >
                      Phone Number
                    </label>
                    {contactUsForm.errors.phoneNumber &&
                    contactUsForm.touched.phoneNumber ? (
                      <div className="text-red-500">
                        {contactUsForm.errors.phoneNumber}
                      </div>
                    ) : null}
                    <input
                      type="text"
                      name="phoneNumber"
                      id="hs-phone-number-1"
                      onChange={contactUsForm.handleChange}
                      value={contactUsForm.values.phoneNumber}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm  font-medium"
                  >
                    Details
                  </label>
                  {contactUsForm.errors.details &&
                  contactUsForm.touched.details ? (
                    <div className="text-red-500">
                      {contactUsForm.errors.details}
                    </div>
                  ) : null}
                  <textarea
                    id="hs-about-contacts-1"
                    name="details"
                    placeholder="Enter Your details"
                    rows={2}
                    onChange={contactUsForm.handleChange}
                    value={contactUsForm.values.details}
                    className="py-3 px-4 block w-full border-2"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Send inquiry
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
          {/* Icon Block */}
          <a
            className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
            href="#"
          >
            <svg
              className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                KnowledgeBase
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                We're here to help with any questions or code.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                Contact support
                <svg
                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
            href="#"
          >
            <svg
              className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                FAQ
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                Search our FAQ for answers to anything you might ask.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                Visit FAQ
                <svg
                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
            href="#"
          >
            <svg
              className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
            </svg>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Developer APIs
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                Check out our development quickStart guide.
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
                Contact sales
                <svg
                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </a>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Contact Us */}
    </>
  );
};

export default ContactUs;
