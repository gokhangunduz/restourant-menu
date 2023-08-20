import { ReactElement } from "react";
import "@/styles/global.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DataContext from "@/contexts/DataContext";

export default function MainLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement {
  return (
    <html lang="en">
      <body>
        <DataContext>
          <Header />
          <main className="p-2">{children}</main>
          <Footer />
        </DataContext>
      </body>
    </html>
  );
}
