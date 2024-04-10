import { Metadata } from "next";
import FormTemplate from "../_ui/FormTemplate";

export const metadata: Metadata = {
  title: "Register",
};

const formdetails = {
  img: "Register",
  welcome: "Welcome",
  page: "Register",
  inputs: [
    {
      name: "User name",
      type: "text",
    },
    {
      name: "Email address",
      type: "email",
    },
    {
      name: "Phone number",
      type: "tel",
    },
    {
      name: "Password",
      type: "password",
    },
  ],
  altpage: "Login",
};
export default function SignUp() {
  return <FormTemplate {...formdetails} />;
}
