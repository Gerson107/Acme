import "./ui/global.css"
import { montserrat } from "./ui/fonst";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
         {children}
        </body>
    </html>
  );
}
