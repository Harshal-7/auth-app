"use client";
import ToogleTheme from "@/components/toogle-theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SiAuthelia } from "react-icons/si";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <ToogleTheme />
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold text-xl md:text-3xl mb-5 flex justify-center items-center md:gap-3">
          <span className="tracking-widest text-center">
            AUTHENTICATION SYSTEM
          </span>
          <SiAuthelia className="hidden md:block w-6 h-6" />
        </h1>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <Button variant="link" className="hover:no-underline">
            <Link href="/login" className="flex flex-col gap-2">
              <span className="underline ">Login</span>
            </Link>
          </Button>
          <Button variant="link" className="hover:no-underline">
            <Link href="/register" className="flex flex-col gap-2">
              <span className="underline ">Register</span>
            </Link>
          </Button>
          <Button variant="link" className="hover:no-underline">
            <Link href="/register" className="flex flex-col gap-2">
              <span className="underline ">Dashboard</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
