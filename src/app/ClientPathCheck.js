"use client"; // This must be a client component

import { usePathname } from "next/navigation";
import NotFound from "./not-found"; // Make sure the path is correct

export default function ClientPathCheck({ notFoundBlock, children }) {
  const pathname = usePathname();
  const validPaths = ["/home", "/about"]; // Adjust this to include all valid paths in your application

  const isValidPath = validPaths.includes(pathname);

  return (
    <>
      {isValidPath ? children : <NotFound blok={notFoundBlock} />}
    </>
  );
}
