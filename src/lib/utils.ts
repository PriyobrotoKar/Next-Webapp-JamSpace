import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number.
 * @param {number} number  The number that you want to format
 * @returns  The formatted number
 */
export function format(number: number): string {
  const value = number.toString();
  let formatedValue = `${value.substring(value.length - 3)}`;
  for (let f = 0, i = value.length - 4; i >= 0; i--) {
    if (f & 1) {
      formatedValue = value[i] + formatedValue;
      f++;
    } else {
      formatedValue = value[i] + "," + formatedValue;
      f++;
    }
  }

  return formatedValue;
}
