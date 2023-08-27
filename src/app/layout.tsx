import { ReactElement } from "react";
import "@/styles/global.css";
import { Poppins } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import SidebarContext from "@/contexts/SidebarContext";

const font = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement {
  return (
    <html lang="en" className={font.className}>
      <body>
        <SidebarContext>
          <MainLayout>{children}</MainLayout>
        </SidebarContext>
      </body>
    </html>
  );
}
