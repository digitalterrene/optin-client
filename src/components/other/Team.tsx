"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import larry_s_photo from "@/assets/data/mypic.png";
export default function Team() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our leadership
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <p className="text-xs border   px-2 w-fit ml-auto rounded-full   text-gray-500">
              Software Engineer
            </p>{" "}
            <div className="flex items-center  gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src="https://media.licdn.com/dms/image/D4E35AQF9D5on7YxYyA/profile-framedphoto-shrink_200_200/0/1650231236045?e=1703412000&v=beta&t=qHewex3jbP1DTpVACgghHKEN2-6IvWzB-yzyTY6mAHk"
                alt="Image Description"
              />
              <div className="grow space-y-">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Vincent Otieno
                </h3>
                <div className="flex justify-between">
                  <p className="text-xs  uppercase text-gray-500">
                    Co-founder and CEO
                  </p>
                </div>
              </div>
            </div>{" "}
            <p className="mt-3 text-gray-500">
              I'm Vincent Otieno, a highly skilled software engineer dedicated
              to driving exceptional results for individuals and businesses.
            </p>
            <p className="mt-3 text-gray-500">
              With a proven track record of collaborating with numerous
              companies, I consistently deliver value through cost reduction,
              profit optimization, automation, and streamlined operations.
            </p>
            <p className="mt-3 text-gray-500">
              I am committed to continuous learning, ensuring my expertise
              remains at the forefront of the industry.
            </p>
            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://www.linkedin.com/in/vincent-otieno1/">
                <AiFillLinkedin />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <FaTwitter />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <p className="text-xs border   px-2 w-fit ml-auto rounded-full   text-gray-500">
              Software Developer
            </p>{" "}
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src={larry_s_photo.src}
                alt="Image Description"
              />
              <div className=" justify-between items-center grow ">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Larry Kingstone
                </h3>
                <div className="flex text-xs justify-between">
                  <p className="text-xs uppercase text-gray-500">
                    Chief Technology Officer
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <p className="mt-3 text-gray-500">
              I'm a highly skilled web developer dedicated to driving
              exceptional results for individuals and businesses.
            </p>
            <p className="mt-3 text-gray-500">
              With a proven track record in collaborating with numerous
              companies, I consistently deliver value through cost reduction,
              profit optimization, automation, and streamlined operations.
            </p>
            <p className="mt-3 text-gray-500">
              Committed to continuous learning, ensuring my expertise remains at
              the forefront of the industry.
            </p>
            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <AiFillLinkedin />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <AiFillInstagram />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <FaTwitter />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#">
                <FaGithub />
              </a>
            </div>
          </div>

          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#">
            <h3 className="text-lg text-gray-800 dark:text-gray-200">
              We are hiring!
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See all opening positions
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
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
