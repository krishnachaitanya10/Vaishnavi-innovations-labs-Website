"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="relative z-10 max-h-full bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 bg-image !bg-cover !bg-[center_center] !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
        style={{
          backgroundImage: "url(/assets/img/photos/bg7.jpg)",
        }}
      >
        <div className="container !h-full">
          <div className="flex flex-wrap mx-[-15px] !h-full">
            <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">
              <h2 className="xl:!text-[2.8rem] !leading-[1.2] font-bold !text-[calc(1.405rem_+_1.86vw)] !mb-4 !text-white animate__animated animate__slideInDown animate__delay-1s">
                Build Scalable SaaS. Launch with Confidence.
              </h2>
              <p className="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                CTO-led multi-tenant SaaS development for B2B startups and scale-ups.
              </p>
              <div className="flex gap-4 animate__animated animate__slideInUp animate__delay-3s">
                <Link
                  href={`/blog`}
                  className="btn btn-lg border-[2px] border-white text-white bg-transparent hover:bg-white hover:text-[#21262c] transition-all duration-200 ease-in-out rounded-full px-6 py-3"
                >
                  Read More
                </Link>

                <Link
                  href={`/contact`}
                  className="btn btn-lg border-[2px] border-white text-white bg-transparent hover:bg-white hover:text-[#21262c] transition-all duration-200 ease-in-out rounded-full px-6 py-3"
                >
                  Contact Us
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
