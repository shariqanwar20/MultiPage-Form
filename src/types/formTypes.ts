export type formState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fatherName: string;
  motherName: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  zip: string;
};

export type setFormState = React.Dispatch<
  React.SetStateAction<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    fatherName: string;
    motherName: string;
    address1: string;
    address2: string;
    country: string;
    city: string;
    zip: string;
  }>
>;
