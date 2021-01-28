import * as yup from "yup";

export default yup.object().shape({
    name: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be 3 chars long"),
    email: yup
      .string()
      .email("must be a valid email")
      .required("email is required"),
    password: yup
      .string()
      .required('password is required'),
    TermsOfService: yup.boolean(), 
  });
  