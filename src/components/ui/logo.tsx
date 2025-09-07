import Image from "next/image";
import React from "react";
import logo from "../../../public/images/stace.png"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image className="rounded-full w-16 h-16" src={logo} alt="logo"/>
    </Link>
  );
};

export default Logo;
