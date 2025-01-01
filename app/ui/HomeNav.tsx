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

const NavBar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/logo.png" width={90} height={40} alt="logo" />
            <span className="ml-4 text-lg font-semibold">Home</span>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <Button>
                <SignInButton forceRedirectUrl={"/forms"} />
              </Button>
              <Button>
                <SignUpButton forceRedirectUrl={"/forms"} />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
