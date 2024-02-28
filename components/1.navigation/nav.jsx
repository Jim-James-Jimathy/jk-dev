"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="h-20 w-full absolute px-20 top-0 left-0 flex items-center justify-between">
      <div className="h-full flex items-center">
        <Link href="/" className="text-2xl uppercase">
          logo
        </Link>
      </div>
      <div className="nav-links flex items-center h-full gap-20 text-3xl tracking-widest">
        <Link href="/" className={`${pathname === "/" ? "hidden" : "block"}`}>
          home
        </Link>
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
}
