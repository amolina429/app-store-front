import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/store/provider";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body class="sidebar-mini layout-fixed sidebar-collapse">
        {children}
        <BootstrapClient/>
        </body>
      </Providers>
    </html>
  );
}
