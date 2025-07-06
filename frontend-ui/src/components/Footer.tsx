"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-4 bg-gray-800 text-center text-white">
      &copy; {year ?? "—"} Your Company. All Rights Reserved.
    </footer>
  );
}
