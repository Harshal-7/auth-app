import { Suspense } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className="w-full min-h-screen flex justify-center items-center">
        {children}
      </div>
    </Suspense>
  );
}
