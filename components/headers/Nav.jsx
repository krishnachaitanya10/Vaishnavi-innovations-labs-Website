"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  blockItems,
  blogItems,
  demos,
  docsPages,
  otherPages,
  projectPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
// !text-[var(--current-color)]
export default function Nav({ color = "#fab758" }) {
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";

      // Save the original toggle function
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;

      // Override the toggle function
      Bootstrap.Dropdown.prototype.toggle = function () {
        // Remove the CLASS_NAME from all dropdowns
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });

        // Traverse up through the closest dropdown parents
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }

        // Call the original toggle function
        return originalToggle.call(this);
      };

      // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    // Optional cleanup function for any potential side effects
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  const pathname = usePathname();

  const getActiveParent = (menuLinks) => {
    return menuLinks.find((parent) => {
      if (parent.links) {
        return parent.links.some((link) => link.href === pathname);
      }
      return parent.href === pathname;
    });
  };

  return (
    <ul className="navbar-nav" style={{ "--current-color": color }}>
      <li className="nav-item dropdown dropdown-mega">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            demos.some((link) => link.href == pathname)
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Demos
        </a>
        <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
          <li className="mega-menu-content mega-menu-scroll">
            <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-10px] lg:mx-[-10px] xl:!mt-[-10px] lg:!mt-[-10px] !pl-0 list-none">
              {demos.map((demo) => (
                <li
                  key={demo.id}
                  className={`xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]`}
                >
                  <Link className={`dropdown-item`} href={demo.href}>
                    <figure
                      className={`!rounded-[.4rem] lift hidden xl:block lg:block`}
                    >
                      <Image
                        className={`!rounded-[.4rem] ${
                          demo.href == pathname
                            ? "p-[3px] bg-[var(--current-color)]"
                            : ""
                        } `}
                        srcSet={demo.srcSet}
                        alt={demo.alt}
                        src={demo.src}
                        width={185}
                        height={135}
                      />
                    </figure>
                    <span
                      className={`xl:!hidden lg:!hidden ${
                        demo.href == pathname
                          ? "!text-[var(--current-color)]"
                          : ""
                      } `}
                    >
                      {demo.alt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/*/.row */}
            <span className="hidden xl:!flex lg:!flex">
              <i className="uil uil-direction before:content-['\ea93']" />
              <strong>Scroll to view more</strong>
            </span>
          </li>
          {/*/.mega-menu-content*/}
        </ul>
        {/*/.dropdown-menu */}
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            getActiveParent(otherPages) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Pages
        </a>
        <ul className="dropdown-menu">
          {otherPages.map((item) => (
            <li
              key={item.id}
              className={`dropdown ${
                item.links ? "dropdown-submenu dropend" : "nav-item"
              }`}
            >
              {item.links ? (
                <>
                  <a
                    className={`dropdown-item hover:!text-[var(--current-color)] dropdown-toggle  ${
                      getActiveParent([item])
                        ? "!text-[var(--current-color)]"
                        : ""
                    } `}
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu submenu">
                    {item.links.map((subItem) => (
                      <li key={subItem.id} className="nav-item">
                        <Link
                          className={`dropdown-item hover:!text-[var(--current-color)]   ${
                            subItem.href == pathname
                              ? "!text-[var(--current-color)]"
                              : ""
                          } `}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  className={`dropdown-item hover:!text-[var(--current-color)]   ${
                    item.href == pathname ? "!text-[var(--current-color)]" : ""
                  } `}
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]  ${
            getActiveParent(projectPages) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Projects
        </a>
        <div className="dropdown-menu dropdown-lg">
          <div className="dropdown-lg-content">
            {projectPages.map((section) => (
              <div key={section.id}>
                <h6 className="dropdown-header !text-[var(--current-color)]">
                  {section.title}
                </h6>
                <ul className="pl-0 list-none">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        className={`dropdown-item hover:!text-[var(--current-color)]   ${
                          link.href == pathname
                            ? "!text-[var(--current-color)]"
                            : ""
                        }  `}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* /auto-column */}
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
            getActiveParent(blogItems) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Blog
        </a>
        <ul className="dropdown-menu">
          {blogItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${
                item.type === "dropdown"
                  ? "dropdown dropdown-submenu dropend"
                  : ""
              }`}
            >
              {item.type === "dropdown" ? (
                <>
                  <a
                    className={`dropdown-item hover:!text-[var(--current-color)] dropdown-toggle   ${
                      getActiveParent([item])
                        ? "!text-[var(--current-color)]"
                        : ""
                    } `}
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.links.map((subItem) => (
                      <li key={subItem.id} className="nav-item">
                        <Link
                          className={`dropdown-item hover:!text-[var(--current-color)]   ${
                            subItem.href == pathname
                              ? "!text-[var(--current-color)]"
                              : ""
                          } `}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  className={`dropdown-item hover:!text-[var(--current-color)]   ${
                    item.href == pathname ? "!text-[var(--current-color)]" : ""
                  } `}
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
            getActiveParent(blockItems) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Blocks
        </a>
        <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
          <li className="mega-menu-content">
            <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-15px] lg:mx-[-15px] xl:!mt-[-20px] lg:!mt-[-20px] !pl-0 list-none">
              {blockItems.map((item) => (
                <li
                  key={item.id}
                  className="xl:!px-[15px] xl:!mt-[20px] lg:!px-[15px] lg:!mt-[20px]"
                >
                  <Link className="dropdown-item" href={item.href}>
                    <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
                      <Image
                        className="rounded-none"
                        alt="image"
                        src={item.image}
                        width={635}
                        height={330}
                      />
                    </div>
                    <span
                      className={`${
                        item.href == pathname
                          ? "!text-[var(--current-color)]"
                          : ""
                      } `}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/*/.row */}
          </li>
          {/*/.mega-menu-content*/}
        </ul>
        {/*/.dropdown-menu */}
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
            getActiveParent(docsPages) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Documentation
        </a>
        <ul className="dropdown-menu mega-menu">
          <li className="mega-menu-content">
            <div className="flex flex-wrap mx-0 xl:mx-[-7.5px] lg:mx-[-7.5px]">
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] max-w-full">
                {docsPages.slice(0, 2).map((links, i) => (
                  <React.Fragment key={i}>
                    <h6
                      className={
                        i != 0
                          ? "dropdown-header !text-[var(--current-color)] xl:!mt-6 lg:!mt-6"
                          : "dropdown-header !text-[var(--current-color)]"
                      }
                    >
                      {links.title}
                    </h6>
                    <ul
                      className={
                        i != 0
                          ? "pl-0 list-none xl:columns-2 lg:columns-2"
                          : "pl-0 list-none xl:columns-2 lg:columns-2 xl:pb-1 lg:pb-1"
                      }
                    >
                      {links.links.map((link, i) => (
                        <li
                          key={i}
                          className="xl:inline-block xl:w-full lg:inline-block lg:w-full"
                        >
                          <Link
                            className={`dropdown-item hover:!text-[var(--current-color)]    ${
                              link.href == pathname
                                ? "!text-[var(--current-color)]"
                                : ""
                            } `}
                            href={link.href}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>{" "}
                  </React.Fragment>
                ))}
              </div>
              {/*/column */}
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:border-l-[rgba(164,174,198,0.2)] xl:border-l xl:border-solid lg:border-l-[rgba(164,174,198,0.2)] lg:border-l lg:border-solid">
                <h6 className="dropdown-header !text-[var(--current-color)]">
                  Elements
                </h6>
                <ul className="pl-0 list-none xl:columns-3 lg:columns-3">
                  {docsPages[2].links.map((link, i) => (
                    <li key={i}>
                      <Link
                        className={`dropdown-item hover:!text-[var(--current-color)]     ${
                          link.href == pathname
                            ? "!text-[var(--current-color)]"
                            : ""
                        } `}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </li>
          {/*/.mega-menu-content*/}
        </ul>
        {/*/.dropdown-menu */}
      </li>
    </ul>
  );
}
