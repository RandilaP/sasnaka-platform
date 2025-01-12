"use client";
import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { clickOnLetsGo } from "../lib/actions";
import { usePathname } from "next/navigation";



export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
            <Image src="/logo.png" width={90} height={40} alt="logo" />
            </Link>
            <span className="ml-4 text-lg font-semibold">
              {(pathname === "/") ? ("Home") : (pathname === "/dashboard") ? ("User Portal") : ("")}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <Button>
                <SignInButton forceRedirectUrl={"/forms/genaral-details"} />
              </Button>
              <Button>
                <SignUpButton forceRedirectUrl={"/forms/genaral-details"} />
              </Button>
            </SignedOut>
            <SignedIn>
              {(pathname === "/") ? (
                <Button onClick={clickOnLetsGo}>Let's go</Button>
              ) : (
                <UserButton />
              )}
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

