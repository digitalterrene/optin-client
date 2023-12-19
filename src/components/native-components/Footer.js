"use client";
import { useState } from "react";
import logo from "@/assets/icons/optin_logo_white.png";
export default function Cookies() {
  return (
    <footer className="px-4 mt-10 bg-[#0c4a6e] text-white py-8 dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <a className="flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full dark:bg-violet-400">
            <img src={logo.src} className="w-20" />
          </a>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="/terms-and-conditions">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
