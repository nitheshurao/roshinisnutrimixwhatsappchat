// src/lib/utils.ts

// This utility function helps combine multiple class names
export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  