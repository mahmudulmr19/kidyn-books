import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8",
        className
      )}
    />
  );
}
