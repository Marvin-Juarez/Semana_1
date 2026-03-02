import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider"; // Importamos el proveedor

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habit Tracker - Atomic Habits",
  description: "App para crear hábitos en 66 días",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

