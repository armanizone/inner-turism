import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function formatNumber(number) {

  const numberString = number?.toString();

  const formattedNumber = numberString?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return formattedNumber;
}

