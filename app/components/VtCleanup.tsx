"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function VtCleanup() {
  const pathname = usePathname();
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.documentElement.removeAttribute("data-vt");
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);
  return null;
}
