import type { Metadata } from "next";
import "styles";

export const metadata: Metadata = {
  title: "Polac Journal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="mx-auto min-h-dvh w-full antialiased container"
      >
        {children}
      </body>
    </html>
  );
}
