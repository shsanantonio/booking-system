/**
 * Layout.js is the main entry point of application
 * Contents will be displayed in every router you create
 * Common layout or template for all of the pages
 * All components in this file will be shared in the entire application
 * Customizes the appearance of HTML document
 * You can mofify language, metadata, scrip tags, links and fonts
 */


import "./globals.css";
import { Inter } from "next/font/google";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
const inter = Inter({ subsets: ["latin"] });
/**
 * Metadata is the abstract of the website's content and is used to attach a title, a description, and an image to the site.
 * HTML version - <meta name="title" content="Promptopia"/>
*/
export const metadata = {
    title: "Checkin",
    description: "Never overpay for your stay - Our AI scans thousands of hotels to find the lowest prices for you and automatically re-books at lower rates, refunding you the difference!"
};

  const RootLayout = ({ children }) => (
    <html lang='en'>
      <body
      className={`${inter.className} bg-[var(--bg-1)] text-[var(--neutral-700)]`}>
  
          <main className='app'>
            {children} {/* Displays metadata description + */}
          </main>

      </body>
    </html>
  );
  
  export default RootLayout;