import Link from "next/link";
import { FaBolt } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/LogoCompany/Tarbassi.png";
const Brand = () => (
  <Link href="/">
    <Image src={logo} alt="logo" className="w-32 h-16" />
  </Link>
);
export default Brand;
