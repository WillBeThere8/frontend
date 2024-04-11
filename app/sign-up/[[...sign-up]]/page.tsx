import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full bg-defaultBackground flex justify-center items-center signupBg">
      <div className="">
        <SignUp />
      </div>
    </div>
  );
}
