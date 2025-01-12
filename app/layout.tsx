import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "./ui/HomeNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      <NavBar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
