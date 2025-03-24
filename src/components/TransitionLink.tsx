"use client";

import React, { ReactNode, useEffect } from 'react'
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { wait } from '@/util/wait';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const animateTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (href === pathname) {
      setScrollTop()
    } else {
      const pageCover = document.getElementById("header-background")

      pageCover?.classList.add("animate-page-out")

      await wait(500)

      router.push(href);
    }
  }

  useEffect(() => {
    const content = document.getElementById("header-background")
    content?.classList.remove("animate-page-out")
  }, [pathname])

  return (
    <Link href={href} onClick={animateTransition} className={className} {...props}>{children}</Link>
  )
}

