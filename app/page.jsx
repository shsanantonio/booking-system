/*
 * Represents the homepage route of the application
 * localhost:3000/
 * Adding "use client" will turn this into a client side component instead of the default server side: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
 */


// const Home = () => (
//   <section className='w-full flex-center flex-col'>
//     <h1 className='head_text text-center'>
//       Chekins.com
//       <br className='max-md:hidden' /> {/* Hide on Large devices but break down on smaller devices */}
//       <span className='orange_gradient text-center'> Unlock secret hotel rates</span>
//     </h1>
//     <p className='desc text-center'>
//     "Never overpay for your stay - Our AI scans thousands of hotels to find the lowest prices for you and automatically re-books at lower rates, refunding you the difference!"
//     </p>

//     <Form />
//   </section>
// );

// export default Home;

import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import Category from "@/components/home-1/Category";
import Faq from "@/components/home-1/Faq";
import Hero from "@/components/home-1/Hero";
import Testimonial from "@/components/home-1/Testimonial";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main>
      <CommonHeader />
      <MobileMenu />
      <Hero />
      <Category />
      <Testimonial />
      <Faq />
      <Footer />

    </main>
  );
}
