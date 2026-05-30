"use client";

import { useEffect } from "react";

function setDirection(pathname: string) {
  if (pathname === "/") {
    document.documentElement.setAttribute("data-vt", "back");
  } else {
    document.documentElement.removeAttribute("data-vt");
  }
}

export function VtCleanup() {
  useEffect(() => {
    // popstate fires after the URL has already updated, so location.pathname
    // is already the destination — use it to set direction.
    const onPopState = () => setDirection(window.location.pathname);

    // Capture phase fires before the link's own onClick and before
    // startViewTransition, so we can set direction based on destination href.
    const onCapture = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (link) setDirection(link.pathname);
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onCapture, true);
    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onCapture, true);
    };
  }, []);

  return null;
}
