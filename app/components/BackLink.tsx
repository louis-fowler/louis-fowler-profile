"use client";

import { useTransitionRouter } from "next-view-transitions";

interface BackLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function BackLink({ href = "/", children, className }: BackLinkProps) {
  const router = useTransitionRouter();
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const el = document.documentElement;
        el.setAttribute("data-vt", "back");
        router.push(href);
        // Remove after animation completes — rAF fires inside the transition
        // callback (too early), so we wait past the 350ms animation duration.
        setTimeout(() => el.removeAttribute("data-vt"), 500);
      }}
    >
      {children}
    </a>
  );
}
