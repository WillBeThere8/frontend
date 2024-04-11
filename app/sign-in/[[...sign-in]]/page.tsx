import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="w-full h-full bg-defaultBackground flex justify-center items-center signinBg">
      <div className="">
        <SignIn />
      </div>
    </div>
  );;
}