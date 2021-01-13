import { Formik } from "formik";
import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { formState, setFormState } from "../types/formTypes";
interface Props {
  handleNext: () => void;
  setFormData: setFormState;
  formData: formState;
}
export const SignUpForm: React.FC<Props> = ({
  handleNext,
  setFormData,
  formData,
}) => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("*FirstName is required"),
    lastName: yup.string().required("*LastName is required"),
    email: yup
      .string()
      .email("*Write a proper Email (abc@gmail.com)")
      .required("*Email is required"),
    password: yup
      .string()
      .min(6, "*Password is too short")
      .max(12, "*Password is too long")
      .required("*Password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        handleNext();
      }}
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => (
        <Form style={{ width: "inherit" }} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                isInvalid={touched.firstName && errors.firstName ? true : false}
                isValid={
                  values.firstName === "" || errors.firstName ? false : true
                }
                name="firstName"
                type="text"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
              />
              {touched.firstName && errors.firstName ? (
                <div className="error-message">{errors.firstName}</div>
              ) : null}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                isInvalid={touched.lastName && errors.lastName ? true : false}
                isValid={
                  values.lastName === "" || errors.lastName ? false : true
                }
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
              />
              {touched.lastName && errors.lastName ? (
                <div className="error-message">{errors.lastName}</div>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                isInvalid={touched.email && errors.email ? true : false}
                isValid={values.email === "" || errors.email ? false : true}
                name="email"
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                autoFocus
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                isInvalid={touched.password && errors.password ? true : false}
                isValid={
                  values.password === "" || errors.password ? false : true
                }
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : null}
            </Form.Group>
          </Form.Row>
          <div className="button-container">
            <Button variant="primary" className="back-button" disabled>
              Back
            </Button>
            <Button variant="primary" type="submit" className="next-button">
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
