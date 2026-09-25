import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veyra — Create without limits",
  description: "A modern visual design workspace for creating beautiful content.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
