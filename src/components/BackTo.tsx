import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

function BackTo() {
  return (
    <>
      <Link
        href="/posts"
        className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-sm md:text-md"
      >
        <FaArrowCircleLeft className="size-5 mr-2" />

        <span>Nazad na naslove</span>
      </Link>
    </>
  );
}
export default BackTo;
