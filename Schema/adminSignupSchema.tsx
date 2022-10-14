import * as yup from "yup";

const adminSignupSchema = yup.object({
  email: yup
    .string()
    .required("No email provided.")
    .email("Enter a proper email"),
  //   password: yup
  //     .string()
  //     .required("No password provided.")
  //     .min(8, "Password is too short - should be 8 chars minimum.")
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //     ),
});

export default adminSignupSchema;
