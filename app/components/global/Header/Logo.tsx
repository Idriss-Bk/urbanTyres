import React from "react";
import LoGo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return <div className="">
    <Link href="/">
      <Image src={LoGo} alt="UrbanTyres" width={0} height={0} className="w-32" />
    </Link>
  </div>;
};

export default Logo;
