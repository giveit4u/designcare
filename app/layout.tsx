import type { Metadata } from "next";
import "./globals.css";
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/design-care.webflow.css";

export const metadata: Metadata = {
  title: "Designcare",
  description: "Unlimited Design Subscription Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-wf-page="67af545a6f6103ad56b52242" data-wf-site="67af545a6f6103ad56b521d0">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
