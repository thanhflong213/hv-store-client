import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html
    //   lang="en"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    // >
    //   <body className="min-h-full flex flex-col">{children}</body>
    // </html>
    <html lang="en">
      <TooltipProvider>
        <body className="h-screen flex flex-col">{children}</body>
      </TooltipProvider>
    </html>
  );
}
