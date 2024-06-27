
"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

 const navLinks = [
   {
     href: "/",
     label: "Home",
   },
   {
     href: "/posts",
     label: "Posts",
   },

   {
     href: "/create-post",
     label: "Create post",
   },
 ];

export default function Header()  {
   const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src="/vercel.svg"
          height="50"
          width="50"
          alt="Logo"
          className="w-[50px] h-[50px]"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[15px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname == link.href ? "text-zinc-800 font-semibold" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


