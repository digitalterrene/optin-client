"use client";
import React, { useEffect } from "react";
import logo from "@/assets/icons/optin_logo.png";
import logo_dark from "@/assets/icons/optin_logo_white.png";
import { usePathname } from "next/navigation";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export default function Navbar() {
  const pathname = usePathname();
  useEffect(() => {
    import("preline");
  }, []);
  const routes = ["home", "about", "services", "contact"];
  return (
    <div className="bg-gradient-to-tr  from-[#EDDDFD] items-center w-full via-[#DFF1FD]  to-[#EAFAFE] ">
      <div className="border-t">
        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden">
          {/* <!-- Gradients --> */}
          {(pathname == "/" || pathname == "/home") && (
            <div
              aria-hidden="true"
              className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r frodm-[#0c4a6e]/10 via-white  to-white blur-3xl w-[55rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
              <div className="bg-gradient-to-tr from-[#0c4a6e]/40 via-[#0c4a6e] to-[#0c4a6e] blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
            </div>
          )}
          {/* <!-- End Gradients --> */}

          <div className="relative z-10">
            <div
              className={`w-full lg:px-20 ${
                pathname === "/contact" ? "bg-[#0c4a6e]" : ""
              }   flex p-4 items-center`}>
              <a href="/">
                <img
                  src={
                    pathname === "/" ||
                    pathname === "/home" ||
                    pathname === "/services"
                      ? logo.src
                      : logo_dark.src
                  }
                  className="w-20"
                />
              </a>
              <div className=" gap-4 hidden lg:flex pt-4 ml-auto items-center">
                {/* <div className="relative inline-block">
                  <input
                    type="checkbox"
                    id="hs-default-solid-switch-with-icons"
                    className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600

  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                  />
                  <label
                    for="hs-default-solid-switch-with-icons"
                    className="sr-only">
                    switch
                  </label>
                  <span className="peer-checked:text-white text-gray-500 w-6 h-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                    <GoSun />{" "}
                  </span>
                  <span className="peer-checked:text-blue-600 text-gray-500 w-6 h-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
                    <BsMoon />{" "}
                  </span>
                </div> */}

                {routes?.map((route, i) => (
                  <a
                    key={i}
                    href={`/${route}`}
                    className={` border ${
                      pathname.includes(route)
                        ? "bg-white  text-blue-600"
                        : "text-white bg-transparent border-transparent"
                    } px-2 py-1   font-bold  rounded-full capitalize`}>
                    {route}
                  </a>
                ))}
              </div>
              <div className="ml-auto flex lg:hidden">
                <Menu>
                  <MenuHandler className="bg-white rounded-full text-blue-500 capitalize py-2">
                    <Button>
                      {pathname === "/"
                        ? "landing"
                        : pathname.replaceAll("/", "")}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <a href="/home">
                      <MenuItem>Home</MenuItem>
                    </a>
                    <a href="/about">
                      <MenuItem>About</MenuItem>
                    </a>
                    <a href="/services">
                      <MenuItem>Services</MenuItem>
                    </a>
                    <a href="/contact">
                      <MenuItem>Contact</MenuItem>
                    </a>
                  </MenuList>
                </Menu>
              </div>
            </div>

            {(pathname == "/" || pathname == "/home") && (
              <div className=" px-4 sm:px-6   lg:px-8 py-10 lg:py-16">
                <div className="max-w-5xl  space-y-10 text-center mx-auto">
                  {pathname === "/" && (
                    <p className="inline-block text-white text-sm font-medium bg-clip-text bg-gradient-to-l   to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                      Latest company news
                    </p>
                  )}
                  {pathname === "/home" && (
                    <a
                      className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#">
                      A Consultant? - Create Account
                      <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </a>
                  )}

                  {/* <!-- Title --> */}
                  <div className="mt-5 mxax-w-5xl">
                    {pathname === "/home" && (
                      <h1 className="lg:text-6xl text-2xl p-4 text-center font-bold from-purple-600 via-pink-600  lg:via-[65%] lg:to-0% lg:from-30% to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                        Let's Further Africa Together
                      </h1>
                    )}

                    <h1 className="block font-semibold  text-black   text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                      {pathname === "/" && " The Intuitive Paid Platform"}
                    </h1>
                    {pathname === "/home" && (
                      <h1 className="block font-bold text-gray-800  text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        {/* Let's Further Africa
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                          Together
                        </span> */}
                      </h1>
                    )}
                  </div>
                  {/* <!-- End Title --> */}

                  <div className="mt-5 mx-auto w-fit max-w-3xl">
                    {pathname === "/" && (
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        For the African market. We are an Africa-focused
                        consulting services platform that aims at bootstarpping
                        the African proffessionals for a heightened economic
                        participation in the continent
                      </p>
                    )}
                    {pathname === "/home" && (
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Welcome to Optin Consult, where business consultancy
                        meets innovation. Our expert consultants are ready to
                        transform your challenges into opportunities. Whether
                        you're a seasoned entrepreneur or launching your first
                        venture, our personalized solutions cater to your unique
                        needs.
                      </p>
                    )}
                    {pathname !== "/" && <div className="h-16"></div>}
                  </div>

                  {/* <!-- Buttons --> */}
                  <div className="mt-8  h-20  gap-3 flex justify-center">
                    {pathname === "/" && (
                      <a
                        className="py-1 h-12 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#">
                        Open App
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    )}
                    {pathname === "/" && (
                      <a
                        className=" inline-flex px-4 py-1 h-12 items-center gap-x-2 text-sm font-semibold rounded-full border border- text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#">
                        Learn More
                      </a>
                    )}
                  </div>
                  {/* <!-- End Buttons --> */}
                </div>
              </div>
            )}
          </div>
          <div
            aria-hidden="true"
            className="flex absolute top-96 start-1/2 transform -translate-x-1/2">
            <div
              className={`${
                pathname === "/" || pathname === "/home"
                  ? "bg-gradient-to-l"
                  : ""
              } from-white   to-white blur-3xl w-[55rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900`}></div>
            <div
              className={`
               ${
                 pathname === "/" || pathname === "/home"
                   ? "bg-gradient-to-l"
                   : ""
               } from-white  to-white blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70`}></div>
          </div>
        </div>
        {/* <!-- End Hero --> */}
      </div>
    </div>
  );
}
