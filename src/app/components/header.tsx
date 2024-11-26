import React from "react";
import Image from "next/image";
import logo from "../Frame 50.png";
import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
import { Sheet } from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { SheetContent } from "@/components/ui/sheet";
const Header = () => {
  return (
    <div className="flex flex-row justify-between mx-12 mt-6">
      <div id="logo" className="">
        <Image src={logo} alt="logo" />
      </div>
      <div id="nav" className="cursor-pointer md:flex-row w-[407px] h-8 gap-8 md:flex hidden">
        <ul className="flex flex-row gap-8 text-sm font-medium font-sans">
          <li className="w-[64.13px] h-[17.1px]">CATALOGUE</li>
          <li className="w-[45.6px] h-[15.67px]">FASHION</li>
          <li className="w-[58.42px] h-[15.67px]">FAVOURITE</li>
          <li className="w-[48.92px] h-[15.2px]  ">LIFESTYLE</li>
        </ul>
        <Button>SIGN UP</Button>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden flex">
          <IoMdMenu />
        </SheetTrigger>
        <SheetContent>
          <div
            id="nav"
            className="flex flex-col w-[407px] h-8 gap-8 cursor-pointer"
          >
            <ul className="flex flex-col gap-8 text-sm font-medium font-sans">
              <li className="w-[64.13px] h-[17.1px]">CATALOGUE</li>
              <li className="w-[45.6px] h-[15.67px]">FASHION</li>
              <li className="w-[58.42px] h-[15.67px]">FAVOURITE</li>
              <li className="w-[48.92px] h-[15.2px]  ">LIFESTYLE</li>
            </ul>
            <Button>SIGN UP</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
