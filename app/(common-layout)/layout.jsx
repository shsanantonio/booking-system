"use client";
import Footer from "@/components/Footer";
import CommonHeader from "@/components/CommonHeader";
import MobileMenu from "@/components/MobileMenu";
export default function RootLayout({
  children,
}) {
  return (
    <>
      <CommonHeader />
      <MobileMenu />
      {children}
      <Footer />
    </>
  );
}
