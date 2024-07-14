import { Inter } from "next/font/google";
import { AuthProvider } from "./contexts/AuthContext";
import StoreProvider from "./store/StoreProvider";
import "styles/tailwind.css";
import MainNavbar from "components/Layout/Navbar/MainNavbar";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cart = { products: [] };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Theme>
            <StoreProvider cart={cart}>
              <AuthProvider>
                <MainNavbar />
                {children}
                <Footer />
              </AuthProvider>
            </StoreProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
