import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};
export default function Page() {
  return (
    <div className="w-full h-full bg-defaultBackground flex justify-center items-center signupBg">
      <div className="">
        <SignUp />
      </div>
    </div>
  );
}
