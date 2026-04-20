import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marshmellow Day Spa — Play on Mac",
  description: "Run the free Windows game Marshmellow Day Spa on your Apple Silicon Mac. Download and play in minutes.",
  openGraph: {
    title: "Marshmellow Day Spa — Play on Mac",
    description: "Download and play in 3 simple steps on your Mac.",
    images: ["https://img.itch.zone/aW1nLzE3NjIwNjYucG5n/original/W0Nl87.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
