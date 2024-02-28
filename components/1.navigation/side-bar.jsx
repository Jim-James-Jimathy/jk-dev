import Link from "next/link";
import React from "react";

export default function SideBar() {
  return (
    <aside className="flex flex-[.1] flex-col items-center justify-center gap-y-24">
      <Link href="/" className="text-3xl">
        icon
      </Link>
      <Link href="/" className="text-3xl">
        icon
      </Link>
      <Link href="/" className="text-3xl">
        icon
      </Link>
    </aside>
  );
}
