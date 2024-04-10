import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Formdetails {
  img: string;
  welcome: string;
  page: string;
  inputs: {
    name: string;
    type: string;
  }[];
  altpage: string;
}

export default function FormTemplate(formdetails: Formdetails) {
  return (
    <main
      className={`font-poppins w-full h-screen flex items-center overflow-hidden`}
    >
      <div
        className="w-[30%] text-center justify-center items-center flex-col h-full bg-contain bg-[#AFCBE3] bg-center bg-no-repeat hidden md:flex"
        style={{ backgroundImage: `url(/Images/svgs/${formdetails.img}.svg)` }}
      >
        <p className="text-[2.5rem] font-extrabold">{formdetails.welcome}</p>
        <p className="text-[1.25rem] font-semibold">Your number 1 event app</p>
      </div>
      <Card className="border-none h-full bg-defaultBackground md:w-[70%] w-full rounded-none text-white md:px-[4.43rem] pt-[1.188rem] flex flex-col justify-center">
        <CardHeader>
          <CardTitle className="mb-[1.593rem]">{formdetails.page}</CardTitle>

          <hr className="w-[3rem] bg-defaultAccent border-none h-[0.3px]" />
        </CardHeader>

        <CardContent className="mt-[1.5rem]">
          <form>
            <div className="grid w-full items-center gap-4">
              {formdetails.inputs.map((inputdet, i) => (
                <div className="flex flex-col space-y-1.5" key={i}>
                  <Label
                    htmlFor={inputdet.name.toLowerCase().replace(/ +/g, "")}
                    className="mb-[0.875rem] font-semibold"
                  >
                    {inputdet.name}
                  </Label>
                  <Input
                    id={inputdet.name.toLowerCase().replace(/ +/g, "")}
                    type={inputdet.type}
                    className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[0.875rem]"
                  />
                </div>
              ))}

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="bg-[#FFFFFF] mr-[1rem]" />

                <Label
                  htmlFor="terms"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agreed with the Terms of Service and Privacy
                  Policy
                </Label>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-start">
          <Button
            className="flex gap-2 justify-center md:w-[18rem] mb-[1rem] w-full"
            type="submit"
          >
            <p className="font-semibold text-[1rem]">{formdetails.page}</p>

            <Image
              alt="register"
              src="./Images/svgs/Arr-register.svg"
              width={20}
              height={20}
            />
          </Button>

          <p className="font-normal text-[1rem]">
            {formdetails.page === "Login"
              ? "Don’t have an account?"
              : "Already have an account?"}{" "}
            &nbsp;
            <Link
              href={`/${formdetails.altpage.toLowerCase()}`}
              className="text-defaultAccent"
            >
              {formdetails.altpage}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
