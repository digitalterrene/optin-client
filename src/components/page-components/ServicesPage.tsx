"use client";
import React, { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <div className="py-40  mb-40 -mt-52 h-[700px] lg:bg-[linear-gradient(90deg,_white_67%,_#0c4a6e_30%)]">
        <div className="mx-auto mt-20 px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="lg:max-w-lg lg:pr-5">
              <div className="max-w-xl">
                <h2 className="mb-6 max-w-lg text-3xl leading-snug tracking-tight text-blue-600 sm:text-5xl sm:leading-snug">
                  <span className="my-1 inline-block   font-bold text-[#0c4a6e]">
                    Our Pricing model
                  </span>
                  suits everyone
                </h2>
                <p className="text-base text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </p>
                <div className="mt-8 sm:flex space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="relative overflow-hidden rounded-xl border-4 border-blue-600 bg-white shadow">
                    <div className="py-10 px-6">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          23
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          Consultants
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border-4 border-blue-600 bg-white shadow">
                    <div className="py-10 px-6">
                      <div className="flex items-center">
                        <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                          106
                        </h3>
                        <span className="ml-3 text-base font-medium capitalize">
                          Clients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-blue-600  lg:ml-16   hidden lg:block">
              <div className="border-b-8   max-w-lg mx-auto mb-10">
                <img
                  className="  h-[580px] object-cover "
                  src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1702818761~exp=1702819361~hmac=81a64c5572ac25895986bb8cfe727c39fb1353f1e6d5c7a7c2725b44525f4bad"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-32  flex flex-col justify-center  w-fit right-[33%] text-center  mx-auto  ">
        <p className="text-2xl font-bold sm:text-4xl mt-24 dark:text-gray-50">
          Pricing
        </p>
        <div className="inline-flex mt-6 mx-auto w-fit text rounded-lg shadow-sm">
          <button
            type="button"
            className="py-3 px-4   w-40 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Daily
          </button>
          <button
            type="button"
            className="py-3 px-4  w-40 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Monthly
          </button>
          <button
            type="button"
            className="py-3 px-4  w-40 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Yearly
          </button>
        </div>
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Starter</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                      $0
                    </span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Standard</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                      $3
                    </span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Premium</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                      $7
                    </span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y dark:divide-gray-700">
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key One</h3>
                </th>
                <td>
                  <span className="block text-sm">1</span>
                </td>
                <td>
                  <span className="block text-sm">10</span>
                </td>
                <td>
                  <span className="block text-sm">100</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key Two</h3>
                </th>
                <td>
                  <span className="block text-sm">0,5 GB</span>
                </td>
                <td>
                  <span className="block text-sm">5 GB</span>
                </td>
                <td>
                  <span className="block text-sm">500 GB</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key Three</h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Free plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key Four</h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Free plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600">
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key Five</h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Free plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600">
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600">
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Pricing Model Key Six</h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Free plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600">
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600">
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://img.freepik.com/free-photo/strategy-analysis-planning-vision-business-success-concept_53876-121236.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Strategic Consultancy
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Craft a roadmap for success with our expert consultants. We
                  provide insights, analysis, and actionable strategies tailored
                  to your business goals.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </div>
          </a>

          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://img.freepik.com/free-photo/business-teamwork-meeting-concept_1421-223.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Innovation Advisory
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Stay ahead of the curve with our innovation advisory services.
                  Leverage cutting-edge technologies and creative thinking to
                  drive innovation within your business.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </div>
          </a>

          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Financial Planning
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Achieve financial excellence with our financial planning
                  services. From budgeting to forecasting, we help you make
                  informed decisions for a secure financial future.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </div>
          </a>

          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://img.freepik.com/free-photo/strategy-plan-is-help-business-development_53876-133861.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph"
                  alt="Image Description"
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Market Expansion Strategies
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Ready to expand your market reach? Our strategies are rooted
                  in market analysis and tailored to position your brand for
                  success in new territories.
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
