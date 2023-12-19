"use client";
import React, { useEffect } from "react";
import { AccordionCustomStyles } from "../other/AccordionCustomStyles";
import Team from "../other/Team";
export default function RootPage() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <div className="lg:flex w-full gap-6 px-4 lg:px-40 py-20 mx-auto items-center  ">
        <div className="lg:w-2/3 space-y-4">
          <div className="font-bold text-xl">Our story</div>
          <p className=" ">
            Karibu (Welcome) to Optin , where African expertise meets global
            opportunities – a journey inspired by the rich diversity and
            untapped potential across the continent.At Optin Consult, our
            journey is woven with a passion for transforming businesses through
            consultancy. Founded 2024, we embarked on a mission to bridge the
            gap between expertise and entrepreneurs, empowering every business
            to thrive.
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="lg:w-96 w-60 object-cover object-center h-60"
            src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
          />
          <div className="-ml-10">
            <img
              className="w-96 h-40 object-cover object-cnter"
              src="https://img.freepik.com/free-photo/cute-young-female-with-laptop-office_23-2148180641.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
            />
            <img
              className="w-96 h-40 object-cover object-cnter"
              src="https://img.freepik.com/free-photo/people-working-call-center_23-2148094823.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 space-y-4">
        <div className="font-bold text-2xl w-fit mx-auto">
          Why Optin Consult?
        </div>
        <p className="lg:w-1/3 px-4 lg:px-0 text-center mx-auto">
          At Optin Consult, we are more than a consultancy platform; we're your
          dedicated partners in success. What sets us apart:
        </p>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
            <div>
              <img
                className="w-12 border rounded-md border-[#9333EA] p-1"
                src="https://cdn-icons-png.flaticon.com/128/10445/10445358.png"
              />
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                <div className="bg-[#9333EA] w-8/12 h-0.5"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Tailored Consultancy
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Your business is unique, and so are our solutions.
                </p>
              </div>
            </div>

            <div>
              <img
                className="w-12 border rounded-md border-green-500 p-1"
                src="https://cdn-icons-png.flaticon.com/128/2839/2839155.png"
              />
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                <div className="bg-green-500 w-6/12 h-0.5"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Innovation at Heart
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Stay ahead with strategies crafted for the future.
                </p>
              </div>
            </div>

            <div>
              <img
                className="w-12 border rounded-md border-blue-500 p-1"
                src="https://cdn-icons-png.flaticon.com/128/417/417723.png"
              />
              <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-white/0 h-0.5 mt-6">
                <div className="bg-blue-500 w-11/12 h-0.5"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Innovation at Heart
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Stay ahead with strategies crafted for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
        <AccordionCustomStyles />
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
}
