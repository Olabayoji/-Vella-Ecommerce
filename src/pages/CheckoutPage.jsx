import React, { useEffect, useState } from "react";
import OrderSummary from "../components/Cart/OrderSummary";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";

const phoneRegExp = "^!*([0-9]!*){10,}$";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Triggered when form is submitted
  const checkout = () => {
    // Send data containing user information and cart item to backend
    // .........
    dispatch(cartActions.checkout(true));
  };

  // Triggered when the back button is pressed
  const updateForm = (value) => {
    dispatch(cartActions.updateForm(value));
  };
  // Default formData
  const defaultFormData = useSelector((state) => state.cart.form);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  return (
    <div className=" p-12 mx-auto  max-w-7xl ">
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
            Shipping Address
          </h2>
          <Formik
            initialValues={defaultFormData}
            validationSchema={validation}
            onSubmit={checkout}
          >
            {({ errors, touched, values }) => (
              <Form className="justify-center w-full mx-auto" method="post">
                <div className="">
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        First Name
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className={`${
                          errors.firstName &&
                          touched.firstName &&
                          "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="firstName" />
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="lastName"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Last Name
                      </label>
                      <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className={`${
                          errors.lastName &&
                          touched.lastName &&
                          "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="lastName" />
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Email
                      </label>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={`${
                          errors.email && touched.email && "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="email" />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="tel"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Phone number
                      </label>
                      <Field
                        name="tel"
                        id="tel"
                        type="tel"
                        placeholder="Phone Number"
                        className={`${
                          errors.tel && touched.tel && "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="tel" />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Address
                      </label>
                      <Field
                        as="textarea"
                        className={`${
                          errors.address && touched.address && "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                        name="address"
                        id="address"
                        rows="4"
                        placeholder="Address"
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="address" />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="city"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        City
                      </label>
                      <Field
                        id="city"
                        name="city"
                        type="text"
                        placeholder="City"
                        className={`${
                          errors.city && touched.city && "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="city" />
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="postcode"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Postcode
                      </label>
                      <Field
                        id="postcode"
                        name="postcode"
                        type="text"
                        placeholder="Post Code"
                        className={`${
                          errors.postcode &&
                          touched.postcode &&
                          "border-red-700"
                        } w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 `}
                      />
                      <p className="text-red-700 text-sm mt-1">
                        <ErrorMessage name="postcode" />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="relative pt-3 xl:pt-6">
                    <label
                      htmlFor="note"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      {" "}
                      Notes (Optional)
                    </label>
                    <Field
                      as="textarea"
                      name="note"
                      className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      rows="4"
                      placeholder="Notes for delivery"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Link
                      onClick={() => updateForm(values)}
                      to="/cart"
                      className=" w-[45%] text-center flex items-center justify-center text-my-primary border border-solid border-my-primary rounded hover:bg-my-primary/[0.7] hover:text-white duration-300"
                    >
                      Back
                    </Link>
                    <button
                      onClick={() => updateForm(values)}
                      type="submit"
                      className="w-[45%]  py-2 text-white bg-my-primary hover:hover:bg-my-primary/[0.7] rounded"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;

const validation = Yup.object({
  firstName: Yup.string().min(3, "Enter valid name").required("Required"),
  lastName: Yup.string().min(3, "Enter a valid last name").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  tel: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address: Yup.string().min(5, "Enter a valid address").required("Required"),

  city: Yup.string().min(5, "Enter a valid state").required("Required"),
  postcode: Yup.string()
    .min(5, "Enter a valid postal address")
    .required("Required"),
});
