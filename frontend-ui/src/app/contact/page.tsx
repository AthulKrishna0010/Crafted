"use client";
import dynamic from "next/dynamic";

// Import the page dynamically with SSR disabled
const ContactPage = dynamic(() => import("@/components/ContactPage"), {
  ssr: false,
});

export default function Contact() {
  return <ContactPage />;
}
