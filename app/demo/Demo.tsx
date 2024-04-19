import { useState, useRef } from "react";
import Image from "next/image";
import React from "react";
import { formatDateTime, parseDateTime, getDateTimeLocal } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NaturalLanguageInputProps {
  expiresAt?: Date | null;
  setExpiresAt: (date: Date) => void;
}

export const Demo = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [textContent, setTextContent] = useState(true);
  function uploadImage(e: any) {
    let imgLink = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imgLink);
    setTextContent(false);
  }
  return (
    <>
      <Label
        htmlFor="image-file"
        className="w-full cursor-pointer mb-4 rounded-2xl text-[#ffffff]"
        aria-required="true"
      >
        <p>Event Image Placeholder*</p>
        <input
          type="file"
          accept="image/*"
          id="image-file"
          hidden
          onChange={(e) => uploadImage(e)}
          required
        />

        <div
          className={`flex flex-col items-center w-full ${
            selectedImage ? "h-[200px]" : ""
          } py-2 rounded-2xl ${
            textContent ? "border-dashed border-2 border-[#ffffff]" : ""
          }  justify-center bg-cover bg-center text-center mt-4`}
          style={{ backgroundImage: `url(${selectedImage}) ` }}
        >
          {textContent && (
            <>
              <Image
                src={"/Images/svgs/upload.svg"}
                alt="upload_image"
                width={200}
                height={200}
                className="w-[2rem] h-[2rem] mb-2"
              />

              <p>
                Drop image here, or{" "}
                <span className="text-defaultAccent">broswe</span>
              </p>
              <span className="block text-[16px] text-[#8F8F8F]">
                Supports PNGs, JPGs, or WEBP up to 15MB
              </span>
            </>
          )}
        </div>
      </Label>
    </>
  );
};

const NaturalLanguageInput = ({
  expiresAt,
  setExpiresAt,
}: NaturalLanguageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder='E.g. "tomorrow at 5pm" or "in 2 hours"'
      defaultValue={expiresAt ? formatDateTime(expiresAt) : ""}
      onBlur={(e) => {
        if (e.target.value.length > 0) {
          const parsedDateTime = parseDateTime(e.target.value);
          if (parsedDateTime) {
            setExpiresAt(parsedDateTime);
            e.target.value = formatDateTime(parsedDateTime);
          }
        }
      }}
      className="flex-1 border-none bg-[#4A4A4A] placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm p-2 focus-visible:ring-offset-0 focus-visible:ring-0 text-white "
    />
  );
};

const DateTimeLocalInput = ({
  expiresAt,
  setExpiresAt,
}: NaturalLanguageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <input
      type="datetime-local"
      id="expiresAt"
      name="expiresAt"
      value={expiresAt ? getDateTimeLocal(expiresAt) : ""}
      onChange={(e) => {
        const expiryDate = new Date(e.target.value);
        setExpiresAt(expiryDate);

        if (inputRef.current) {
          inputRef.current.value = formatDateTime(expiryDate);
        }
      }}
      className="w-[40px] border-none bg-white focus:outline-none focus:ring-0 sm:text-sm p-2 "
      required
    />
  );
};

export const SmartDatetimePicker = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  return (
    <div className="flex flex-col items-start justify-center ">
      <p>Event Date & Time*</p>
      <div className="flex w-full items-center justify-between  bg-[#4A4A4A] shadow-sm transition-all focus-visible:ring-offset-0 focus-visible:ring-0 border-0 rounded-md overflow-hidden mb-[2rem]">
        <NaturalLanguageInput
          expiresAt={expiresAt}
          setExpiresAt={setExpiresAt}
        />
        <DateTimeLocalInput expiresAt={expiresAt} setExpiresAt={setExpiresAt} />
      </div>
    </div>
  );
};
