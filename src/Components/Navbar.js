import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 border sticky top-0 z-50">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

                {/* Logo */}
                <a href="#" className="flex items-center ms-2">
                    <img
                        src="https://www.svgrepo.com/show/499962/music.svg"
                        className="h-6 mr-3 sm:h-9"
                        alt="Landwind Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Landwind
                    </span>
                </a>

                {/* Right Buttons */}
                <div className="flex items-center lg:order-2">

                    {/* Mobile menu toggle button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            // Close icon
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu Items */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:items-center lg:justify-between lg:order-1`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col space-y-2 my-2 lg:me-14 font-medium lg:flex-row lg:space-x-8 lg:space-y-0 lg:mt-0">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:px-4 lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        {['Products', 'Brands', 'Offers', 'About Us', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
