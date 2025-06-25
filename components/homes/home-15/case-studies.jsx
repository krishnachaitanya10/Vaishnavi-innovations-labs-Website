import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-36 xl:pt-[2.5rem] pb-24 xl:pb-32">
        {/* Header Section */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full px-4 sm:px-6 lg:px-8 pt-36 xl:pt-[2.5rem]">
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-9">
              Case Studies
            </h3>
          </div>
        </div>

        {/* Case Study Boxes */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] !mt-[-40px] !mb-[4.5rem] xl:!mb-[8rem]">
          <div className="md:w-6/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-wind-moon" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">Case Study 1: AI SaaS Platform</h4>
            <p className="!mb-3">
              Scaled from 0 to 1,000 users across 5 tenants in 3 months.
            </p>
          </div>

          <div className="md:w-6/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[40px] max-w-full">
            <div className="icon btn btn-block btn-lg btn-soft-aqua pointer-events-none !mb-6">
              <i className="uil uil-shield-exclamation" />
            </div>
            <h4 className="!text-[1rem] !leading-[1.45]">Case Study 2: Fintech SaaS</h4>
            <p className="!mb-3">
              Migrated from single-tenant to shared infra with zero downtime.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <figure className="!rounded-[.4rem] relative z-[2]">
              <Image
                className="!rounded-[.4rem] w-full h-auto"
                srcSet="/assets/img/photos/about4@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about4.jpg"
                width={455}
                height={250}
              />
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}
