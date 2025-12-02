import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-charcoal-gray dark:text-background-light text-xl font-bold">
            <Link href="/">Ozelim</Link>
          </h2>
        </div>
        <Link
          className="text-charcoal-gray dark:text-background-light/90 hover:text-primary dark:hover:text-primary text-sm font-medium block md:hidden"
          href="/tours"
        >
          Туры
        </Link>
        <Link
          className="text-charcoal-gray dark:text-background-light/90 hover:text-primary dark:hover:text-primary text-sm font-medium block md:hidden"
          href="/resorts"
        >
          Санатории
        </Link>
        <Link
          className="text-charcoal-gray dark:text-background-light/90 hover:text-primary dark:hover:text-primary text-sm font-medium block md:hidden"
          href="/tours"
        >
          О нас
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-charcoal-gray dark:text-background-light/90 hover:text-primary dark:hover:text-primary text-sm font-medium"
            href="/tours"
          >
            Туры
          </Link>
          <Link
            className="text-charcoal-gray dark:text-background-light/90 hover:text-primary dark:hover:text-primary text-sm font-medium"
            href="/resorts"
          >
            Санатории
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button>
            <span>Спланировать поездку</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
