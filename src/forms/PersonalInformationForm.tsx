import { Formik } from "formik";
import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { formState, setFormState } from "../types/formTypes";
import * as yup from "yup";
interface Props {
  handleNext: () => void;
  handleBack: () => void;
  setFormData: setFormState;
  formData: formState;
}
export const PersonalInformationForm: React.FC<Props> = ({
  handleNext,
  handleBack,
  setFormData,
  formData,
}) => {
  const validationSchema = yup.object().shape({
    fatherName: yup.string().required("*Father Name is required"),
    motherName: yup.string().required("*Mother Name is required"),
    country: yup.string().required("*Country Name is required"),
    city: yup.string().required("*City Name is required"),
  });
  return (
    <Formik
      initialValues={{
        fatherName: "",
        motherName: "",
        address1: "",
        address2: "",
        country: "",
        city: "",
        zip: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        handleNext();
      }}
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => (
        <Form
          style={{ width: "inherit", margin: "0 auto" }}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                name="fatherName"
                type="text"
                placeholder="Father's Name"
                onChange={handleChange}
                isInvalid={
                  touched.fatherName && errors.fatherName ? true : false
                }
                isValid={
                  values.fatherName === "" || errors.fatherName ? false : true
                }
                autoFocus
              />
              {touched.fatherName && errors.fatherName ? (
                <div>{errors.fatherName}</div>
              ) : null}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                name="motherName"
                type="text"
                onChange={handleChange}
                placeholder="Mother's Name"
                isInvalid={
                  touched.motherName && errors.motherName ? true : false
                }
                isValid={
                  values.motherName === "" || errors.motherName ? false : true
                }
              />
              {touched.motherName && errors.motherName ? (
                <div className="error-message">{errors.motherName}</div>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address1"
                type="text"
                onChange={handleChange}
                placeholder="Home Address(optional)"
                isInvalid={touched.address1 && errors.address1 ? true : false}
                isValid={true}
              />
              {touched.address1 && errors.address1 ? (
                <div className="error-message">{errors.address1}</div>
              ) : null}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                name="address2"
                type="text"
                onChange={handleChange}
                placeholder="Apartment, studio or floor(optional)"
                isInvalid={touched.address2 && errors.address2 ? true : false}
                isValid={true}
              />
              {touched.address2 && errors.address2 ? (
                <div className="error-message">{errors.address2}</div>
              ) : null}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                type="text"
                onChange={handleChange}
                placeholder="Enter Country"
                isInvalid={touched.country && errors.country ? true : false}
                isValid={values.country === "" || errors.country ? false : true}
              />
              {touched.country && errors.country ? (
                <div className="error-message">{errors.country}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                type="text"
                onChange={handleChange}
                placeholder="Enter City"
                isInvalid={touched.city && errors.city ? true : false}
                isValid={values.city === "" || errors.city ? false : true}
              />
              {touched.city && errors.city ? (
                <div className="error-message">{errors.city}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip"
                type="text"
                onChange={handleChange}
                placeholder="Zip Code(Optional)"
                isInvalid={touched.zip && errors.zip ? true : false}
                isValid={true}
              />
              {touched.zip && errors.zip ? (
                <div className="error-message">{errors.zip}</div>
              ) : null}
            </Form.Group>
          </Form.Row>
          <div className="button-container">
            <Button
              variant="primary"
              className="back-button"
              onClick={handleBack}
            >
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
