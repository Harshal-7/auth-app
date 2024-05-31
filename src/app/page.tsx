import ToogleTheme from "@/components/toogle-theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
import dbConnect from "@/lib/dbConnect";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <ToogleTheme />
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl mb-5">AUTHENTICATION</h1>
        <Button variant="link">
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="link">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
