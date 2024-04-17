import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign In",
};
export default function Page() {
  return (
    <div className="w-full h-full bg-defaultBackground flex justify-center items-center signinBg">
      <div className="">
        <SignIn />
      </div>
    </div>
  );
}
