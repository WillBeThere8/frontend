import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { formatDateTime, parseDateTime, getDateTimeLocal } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NaturalLanguageInputProps {
  expiresAt?: Date | null;
  setExpiresAt: (date: Date) => void;
  onDateChange: (date: any) => void;
  onTimeChange: (time: any) => void;
  date: any;
  time: any;
}
interface Timeparse {
  onDateChange: (date: any) => void;
  onTimeChange: (time: any) => void;
  date: any;
  time: any;
}
export const Demo = ({
  onChange,
  banner,
}: {
  onChange: (imageUrl: string) => void;
  banner: any;
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [textContent, setTextContent] = useState(true);
  const [isClient, setIsClient] = useState(false);


  function uploadImage(e: any) {
    let imgLink = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files[0].name);
    setSelectedImage(imgLink);
    setTextContent(false);
    // Call onChange with the image link
    onChange(e.target.files[0]);
  }
  useEffect(() => {
    if (banner === "") {
      setSelectedImage("");
      setTextContent(true);
    }
    setIsClient(true);
  }, [banner]);
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
  onDateChange,
  onTimeChange,
  date,
  time,
}: NaturalLanguageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      ref={inputRef}
      type="text"
      // value={expiresAt ? formatDateTime(expiresAt) : ""}
      placeholder='E.g. "tomorrow at 5pm" or "in 2 hours"'
      defaultValue={expiresAt ? formatDateTime(expiresAt) : ""}
      onBlur={(e) => {
        if (e.target.value.length > 0) {
          const parsedDateTime: any = parseDateTime(e.target.value);
          if (parsedDateTime) {
            setExpiresAt(parsedDateTime);
            e.target.value = formatDateTime(parsedDateTime);
            const date = new Date(e.target.value);
            onDateChange(date.toISOString());
            onTimeChange(new Date(date.toISOString()).toLocaleTimeString());
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
  onDateChange,
  onTimeChange,
  date,
  time,
}: NaturalLanguageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <input
      type="datetime-local"
      id="expiresAt"
      name="expiresAt"
      // value={expiresAt ? getDateTimeLocal(expiresAt) : ""}
      value={date === "" ? "" : expiresAt ? getDateTimeLocal(expiresAt) : ""}
      onChange={(e) => {
        const expiryDate = new Date(e.target.value);
        setExpiresAt(expiryDate);

        if (inputRef.current) {
          inputRef.current.value = formatDateTime(expiryDate);
        }
        const date = new Date(e.target.value);
        onDateChange(date.toISOString());
        onTimeChange(new Date(date.toISOString()).toLocaleTimeString());
      }}
      className="w-[40px] border-none bg-white focus:outline-none focus:ring-0 sm:text-sm p-2 "
      required
    />
  );
};

export const SmartDatetimePicker = ({
  onDateChange,
  onTimeChange,
  date,
  time,
}: Timeparse) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  // Define a handler for the onChange event of DateTimeLocalInput
  const handleDateTimeChange = (date: Date | null) => {
    // Do something with the date, if needed
    console.log("Date changed:", date);
  };

  return (
    <div className="flex flex-col items-start justify-center ">
      <p className="font-semibold text-slate-100">Event Date & Time*</p>
      <div className="flex w-full items-center justify-between  bg-[#4A4A4A] shadow-sm transition-all focus-visible:ring-offset-0 focus-visible:ring-0 border-0 rounded-md overflow-hidden mb-3">
        <NaturalLanguageInput
          expiresAt={expiresAt}
          setExpiresAt={setExpiresAt}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          date={date}
          time={time}
        />
        <DateTimeLocalInput
          expiresAt={expiresAt}
          setExpiresAt={setExpiresAt}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          date={date}
          time={time}
        />
      </div>
    </div>
  );
};

// create a usesttate
// of type Date
// console.log(new Date(e.target.value).toISOString());
