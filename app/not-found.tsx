import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-screen h-screen mx-auto">
      <div className="text-center flex justify-center items-center flex-col gap-4">
        <Image 
            src={'/Images/svgs/notfound.svg'}
            alt="not found image"
            width={700}
            height={300}
            className="w-100 h-100"
        />
        <h2 className="text-2xl">Not Found</h2>
        <p>This page is either under construction or would not be avaliable for use!</p>
        <Link href="/" className="bg-defaultAccent p-4 rounded-md hover:bg-defaultSeconday">Return Home</Link>
      </div>
    </div>
  );
}
