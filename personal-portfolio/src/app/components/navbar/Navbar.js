import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="top-0 sticky w-full bg-white border-black z-20">
            <div className="container mx-auto flex items-center justify-between p-1">
                <div className="text-black">
                    <p> Justin Aronson </p>
                </div>
                <nav className="font-medium flex flex-row p-4 space-x-8 text-black">
                  <ul className="flex flex-row space-x-8">
                      <li>
                          <Link href="/">
                              <p> Home </p>
                          </Link>
                      </li>
                      
                      <li>
                          <Link href="/projects">
                              <p> Projects </p>
                          </Link>
                      </li>

                      <li>
                          <Link href="/contact">
                              <p> Contact </p>
                          </Link>
                      </li>
                      <li>
                          <a target="_blank" href="https://github.com/JustinAronson">
                              <Image
                                  src="/navbar/github-mark.svg"
                                  width={25}
                                  height={25}
                                  >
                              </Image>
                          </a>
                      </li>
                      <li>
                          <a target="_blank" href="https://www.linkedin.com/in/justin-aronson/">
                              <Image
                                  src="/navbar/LinkedIn_icon.svg"
                                  width={25}
                                  height={25}
                                  >
                              </Image>
                          </a>
                      </li>
                  </ul>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;
