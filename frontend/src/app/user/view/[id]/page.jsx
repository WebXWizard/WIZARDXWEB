"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const View = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="">
      <section className="px-0 py-4 mx-auto max-w-7xl sm:px-4">
        <div className="text-white bg-green-800 border-green-800 rounded-none card card-body sm:rounded-lg">
          <div className="flex flex-col items-center justify-between px-1 py-4 lg:flex-row sm:py-3 sm:px-3">
            <p className="mb-6 text-base font-semibold lg:mb-0">
              Sleep peacefully knowing that your website is performing at it’s
              best.
            </p>
            <a
              href="#"
              className="w-full text-blue-600 shadow btn bg-white rounded-md px-2 py-1 btn-xl sm:w-auto"
            >
              Start for free
            </a>
          </div>
        </div>
      </section>

      <div className="container ">
        {/* <Link
          href={"/user/product"}
          className="btn btn-outline-warning rounded-pill px-3 my-4"
        ></Link> */}

        {productList !== null ? (
          <section className="py-8 bg-white md:py-12 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="">
                  <img
                    className="w-full h-full rounded-xl"
                    src={productList.image}
                    alt="Hero Image"
                  />
                </div>
                <div className="mt-6 sm:mt-8 lg:mt-0 font-[sans-serif]">
                  <h1 className="lg:text-3xl font-bold sm:text-2xl dark:text-black">
                    {productList.name} 
                  </h1>
                  <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                    <p className="text-2xl lg:text-3xl font-bold text-gray-700 sm:text-2xl ">
                      ₹ {productList.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium leading-none text-gray-500 dark:text-gray-400">
                        (5.0)
                      </p>
                      <a
                        href="#"
                        className="text-sm font-bold leading-none text-gray-900 underline hover:no-underline "
                      >
                        345 Reviews
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 font-[sans-serif]">
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center py-2.5 px-5 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      role="button"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                      </svg>
                      Add to Wishlist
                    </a>
                    <a
                      href="#"
                      title=""
                      className=" mt-4 sm:mt-0 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center text-white"
                      role="button"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                        />
                      </svg>
                      Add to cart
                    </a>
                  </div>
                  <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                  <h3 className="text-xl font-semibold mb-2">
                    About This Item:
                  </h3>
                  <p className="mb-6 text-lg text-gray-500 dark:text-gray-600">
                    {productList.description}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Key Features:
                    </h3>
                    <ul className="text-lg  font-[sans-serif ] list-disc list-inside text-gray-600">
                      <li>Dimensions: 27cm (H) x 26.5cm (W) x 19.5cm (D)</li>
                      <li>
                        Features: Glowing stained glass window, wizard-themed
                        decorations
                      </li>
                      <li>Assembly Time: 12+ hours</li>
                      <li>
                        Skill Level: Suitable for beginners and seasoned
                        crafters alike
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <h1>NO PRODUCT FOUND</h1>
          </div>
        )}
      </div>

      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-600">
              Hic eligendi necessitatibus quod quia
            </p>
            <h1 className="py-2 text-3xl font-medium leading-tight title-font">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7 dark:text-gray-50"
              >
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold title-font">Google Play</span>
              </span>
            </button>
            <button className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-600 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="fill-current w-7 h-7 dark:text-gray-50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default View;
