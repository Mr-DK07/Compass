import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="bottom-0 z-10 overflow-hidden bg-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap">
          
          <div className="w-full p-6 sm:w-1/4 md:w-1/4 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center text-sky-500">
                <Logo />
              </div>
              <div>
                <p className="text-sm text-gray-400 hover:text-gray-300">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 sm:w-1/4 md:w-1/4 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 font-semibold text-xs uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 sm:w-1/4 md:w-1/4 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  font-semibold text-xs d uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 sm:w-1/4 md:w-1/4 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  font-semibold text-xs d uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold text-xs text-gray-400 hover:text-gray-300"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
