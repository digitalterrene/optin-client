import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-[#0c4a6e] -mt-20 py-12 z-[999] ">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="flex justify-center">
              <a
                className="group flex items-center gap-2   bg-white/10  p-2 hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                href=" ">
                <p className="me-2 inline-block text-white text-sm">
                  Driving Africa Forward
                </p>
                <BsChevronRight className="text-white" />
              </a>
            </div>
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                About Us
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                At Optin Consult, our journey is woven with a passion for
                transforming businesses through consultancy. Founded 2023, we
                embarked on a mission to bridge the gap between expertise and
                entrepreneurs, empowering every business to thrive.
              </p>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="inline-flex justify-center items-center">
                    <span className="w-2 h-2 inline-block bg-gray-500 rounded-full me-2"></span>
                    <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                      Consultancy Services
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                      15K
                    </h3>
                  </div>

                  <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                    <dt className="pe-3">
                      <span className="text-green-600">
                        <svg
                          className="inline-block w-4 h-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                          />
                        </svg>
                        <span className="inline-block text-sm">1.7%</span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        change
                      </span>
                    </dt>
                    <dd className="text-start ps-3">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        5
                      </span>
                      <span className="block text-sm text-gray-500">
                        last week
                      </span>
                    </dd>
                  </dl>
                </div>

                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="inline-flex justify-center items-center">
                    <span className="w-2 h-2 inline-block bg-green-500 rounded-full me-2"></span>
                    <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                      Successful Meetings
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                      251K
                    </h3>
                  </div>

                  <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                    <dt className="pe-3">
                      <span className="text-green-600">
                        <svg
                          className="inline-block w-4 h-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                          />
                        </svg>
                        <span className="inline-block text-sm">5.6%</span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        change
                      </span>
                    </dt>
                    <dd className="text-start ps-3">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        7
                      </span>
                      <span className="block text-sm text-gray-500">
                        last week
                      </span>
                    </dd>
                  </dl>
                </div>

                <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                  <div className="inline-flex justify-center items-center">
                    <span className="w-2 h-2 inline-block bg-blue-400 rounded-full me-2"></span>
                    <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                      Client Users
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                      104
                    </h3>
                  </div>

                  <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                    <dt className="pe-3">
                      <span className="text-red-600">
                        <svg
                          className="inline-block w-4 h-4 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                          />
                        </svg>
                        <span className="inline-block text-sm">5.6%</span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        change
                      </span>
                    </dt>
                    <dd className="text-start ps-3">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        7
                      </span>
                      <span className="block text-sm text-gray-500">
                        last week
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                Our vision
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our fully furnished spaces are designed and purpose-built
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We worry about the details so that our residents don't have
                    to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-10 justify-between">
        <div className="mt-10 relative w-full max-w-2xl mx-auto">
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/team-business-people-collaborating-plan-financial-strategy-doing-teamwork-create-sales-report-laptop-office-employees-working-project-strategy-analyze-career-growth_482257-39530.jpg?size=626&ext=jpg&ga=GA1.1.1906853957.1701094813&semt=sph')`,
            }}
            className="w-full object-cover flex justify-center py-40  h-96 sm:h-[480px]   bg-no-repeat bg-center bg-cover rounded-xl">
            <a
              className="py-3 h-12 px-4 mt-20 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#">
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
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Play the overview
            </a>
          </div>
        </div>

        <div className="max-w-4xl w-1/2  ">
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              12 Aug, 2023
            </h3>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <svg
                  className="flex-shrink-0 w-4 h-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
                Identified the market for Optin
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                In Africa, professional services are underconsumed mainly
                because of limited technology on the continent
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <img
                  className="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                Vincent Otieno
              </button>
            </div>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Developed the server-side code and handled bug fixing 🐞
              </h3>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  A
                </span>
                Vincent Otieno
              </button>
            </div>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Joined the project
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                And commenced working of the client-side code after a couple of
                meetings
              </p>
              <button
                type="button"
                className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <img
                  className="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Image Description"
                />
                Larry Kingstone
              </button>
            </div>
          </div>

          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              31 Dec, 2023
            </h3>
          </div>

          <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
            <a className="absolute inset-0 z-[1]" href="#"></a>

            <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
              </div>
            </div>

            <div className="grow p-2 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Launch ⛳️
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                The Optin platform was deployed to production... 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
