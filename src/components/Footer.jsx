import Button from "./Button";
import { FaInstagram, FaXTwitter, FaReddit, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className=" flex-col md:flex-row justify-between items-center p-6 bg-gradient-to-r border-b border-black">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <img className="w-36 h-5 mr-2" src="/main-logo-Dgx8VyL7.png" alt="Zuvlo Logo" />
          </div>

          <div className="flex gap-4 my-2 text-red-600 text-2xl">
            <FaInstagram className="hover:text-red-700 cursor-pointer" />
            <FaXTwitter className="hover:text-red-700 cursor-pointer" />
            <FaReddit className="hover:text-red-700 cursor-pointer" />
            <FaFacebook className="hover:text-red-700 cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 text-gray-700">Ready to join the amazing Zuvlo community?</p>
          <div className="flex gap-4">
            <Button text="Sign Up"/>
            <Button text="Login" />
          </div>
        </div>
      </footer>

      {/* Bottom Text Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 py-4 text-sm text-gray-600">
        <p>© 2025 Zuvlo</p>
        <p className="cursor-pointer hover:underline">Terms of Service</p>
        <p className="cursor-pointer hover:underline">Privacy & Cookies Policy</p>
      </div>
    </>
  );
}
