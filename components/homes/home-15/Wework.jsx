import React from "react";
import Image from "next/image";

export default function Wework() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
      {/* ✅ IMAGE COLUMN - Now appears first for left alignment */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative">
        <div
          className="shape bg-dot primary bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50"
          data-rellax-speed={1}
          style={{ top: "3rem", left: "5.5rem" }}
        />
        <div className="flex flex-wrap !relative overlap-grid-2">
          <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%]">
            <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
              <Image
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/about2@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about2.jpg"
                width={450}
                height={450}
              />
            </figure>
          </div>
          <div className="item xl:w-[55%] xl:!mt-[-45%] xl:z-[4]">
            <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
              <Image
                className="!rounded-[.4rem]"
                srcSet="/assets/img/photos/about3@2x.jpg 2x"
                alt="image"
                src="/assets/img/photos/about3.jpg"
                width={450}
                height={450}
              />
            </figure>
          </div>
        </div>
      </div>

      {/* ✅ CONTENT COLUMN - Now appears second */}
      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 409.6 362.5"
          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4"
        >
          {/* SVG paths... */}
        </svg>
        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
          How We Work
        </h2>
        {/* <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
          We’re not an agency. We’re your product engineering partner. With over a decade of SaaS architecture experience, we combine startup speed with scalable foundations to help you build fast and grow right.
        </p> */}
        {/* <p className="!mb-6">Our Values:</p> */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-15px] xl:mx-[-20px]">
          <div className="xl:w-12/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 ... absolute left-0" />
                </span>
                <span>Discover – Understand your vision and goals</span>
              </li>
              <li className="relative !pl-6 !mt-3">
                <span>
                  <i className="uil uil-check w-4 h-4 ... absolute left-0" />
                </span>
                <span>Architect – Design scalable, modular infra</span>
              </li>
            </ul>
          </div>
          <div className="xl:w-12/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-8px">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 ... absolute left-0" />
                </span>
                <span>Build – Rapid MVP or feature builds</span>
              </li>
            </ul>
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 ... absolute left-0" />
                </span>
                <span>Launch – Deploy with CI/CD and infra support</span>
              </li>
            </ul>
          </div>
          <div className="xl:w-12/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 ... absolute left-0" />
                </span>
                <span>Scale – Support, iterate, and grow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
