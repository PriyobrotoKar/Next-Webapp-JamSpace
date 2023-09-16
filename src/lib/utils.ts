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

export function duration(duration: number): string {
  return `${(duration / 60000).toFixed(0)}:${
    Math.floor((duration / 1000) % 60) < 10
      ? 0 + Math.floor((duration / 1000) % 60).toString()
      : Math.floor((duration / 1000) % 60)
  }`;
}
export function dateAdded(addedAt: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateAdded = new Date(addedAt);
  const currDate = new Date();

  const days = Math.floor(
    (currDate.getTime() - dateAdded.getTime()) / 86400000
  );
  if (days > 7 && days <= 30) {
    const weeks = Math.floor(days / 7);
    return weeks + " weeks ago";
  }
  if (days > 30) {
    const fullDate = `${
      months[dateAdded.getMonth()]
    } ${dateAdded.getDate()}, ${dateAdded.getFullYear()}`;
    return fullDate;
  }
  return days + " days ago";
}
