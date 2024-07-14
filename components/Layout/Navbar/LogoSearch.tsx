import * as React from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import CustomImage from "components/UI/Image/CustomImage";
import Logo from "@/Images/logo.png";

const LogoSearch: React.FC = () => (
  <div className="mt-6 flex w-full max-w-[1292px] items-center gap-5 self-center px-5 max-md:flex-wrap max-md:px-5">
    <div className="flex w-full flex-wrap items-center gap-5">
      <div className="flex gap-5 max-md:w-full max-md:justify-center">
        <CustomImage src={Logo} alt="Logo" size="tiny" className="custom-image-style" />
      </div>
      <form className="my-auto flex h-[55px] max-w-[700px] flex-auto gap-5 border-2 border-solid border-zinc-100 max-md:w-full max-md:pl-5">
        <label htmlFor="search" className="sr-only">
          Search Products
        </label>
        <input
          id="search"
          type="text"
          className="flex-auto px-3 text-sm font-light text-neutral-400"
          placeholder="Search Products"
          aria-label="Search Products"
          style={{ height: "100%" }}
        />
        <div className="flex items-center justify-center gap-1">
          <div className="hidden size-[55px] items-center justify-center md:flex">
            <FaFilter />
          </div>
          <div className="hidden size-[55px] items-center justify-center bg-black md:flex">
            <IoIosSearch className="text-white" />
          </div>
        </div>
      </form>
      <div className="my-auto hidden gap-3.5 md:flex">
        <IoIosHeartEmpty />
        <IoCartOutline />
      </div>
    </div>
    <div className="my-auto mt-4 hidden flex-auto self-stretch text-xl text-zinc-100 max-md:flex max-md:justify-center">
      <a href="/login" className="font-light">
        Login
      </a>{" "}
      <span className="font-light text-zinc-100">|</span>{" "}
      <a href="/signup" className="font-light">
        Signup
      </a>
    </div>
  </div>
);

export default LogoSearch;
