import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center space-y-3">
      <Skeleton className="h-[300px] w-[300px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  );
}
