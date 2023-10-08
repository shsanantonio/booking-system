import Image from "next/image";
import Form from "./Form"
import Link from "next/link";
import { DownArrow, SearchIcon } from "@/public/data/icons";

const Hero = () => {
  return (
    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
      <Image
        priority
        className="absolute hidden xl:block w-[25%] top-0 right-0"
        src="/img/primary-hero-img-1.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute hidden lg:block w-[25%] left-0 bottom-0 z-20"
        src="/img/primary-hero-img-2.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center relative z-30">
            <h1 className="text-[40px] lg:text-[56px] leading-[68px] text-[var(--neutral-700)] font-semibold">
            Travel with confidence,<br /> Travel with AI. 
            </h1>
            <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-9">
            Our AI scans thousands of hotels to find the lowest prices for you and automatically re-books at lower rates, refunding you the difference!
            </p>
              <Form />
              {/* <HeroDropdown2 />
              <HeroDropdown3 />
              <HeroDropdown4 />
              <Link
                href="#"
                className="py-[14px] px-6 w-full flex justify-center xl:w-auto text-white bg-primary rounded-full">
                <SearchIcon />
              </Link> */}
            
            <div className="mx-auto mt-16">
              
              <Link href="#">
                <button className="text-white bg-primary rounded-full p-4 mb-2">
                    <DownArrow />
                </button>
              </Link>
              <br />
              <span className="text-center">More Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
