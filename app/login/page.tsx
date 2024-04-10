import { Metadata } from "next";
import FormTemplate from "../_ui/FormTemplate";

export const metadata: Metadata = {
  title: "Register",
};

const formdetails = {
  img: "login",
  welcome: "Welcome Back",
  page: "Login",
  inputs: [
    {
      name: "Email address",
      type: "email",
    },
    {
      name: "Password",
      type: "password",
    },
  ],
  altpage: "Register",
};
export default function Login() {
  return <FormTemplate {...formdetails} />;
}
