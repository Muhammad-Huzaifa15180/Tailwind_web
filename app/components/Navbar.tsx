import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../constants";
import { link } from "fs";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between relative z-30 py-5 items-center">
      <Link href="/">
        <Image src="\hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className=" hidden h-full gap-12 md:flex md:gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:block md:block">
        <Button
        type="button"
        title="Login"
        icon="/user.svg"
        variant="dark"
        />
        </div>
        <Image src="\menu.svg" width={32} height={32} alt="menu" className="cursor-pointer md:hidden lg:hidden">

        </Image>

    </nav>
  );
};

export default Navbar;
