import React from "react";
import Link from 'next/link'        

const Navbar = () => {
  return (
    <div>
      <>
        {/* Navbar Start */}
        <nav className=" flex justify-center items-center py-4 bg-stone-900 ">
          <div className=" ml-6">
            <img className="" src="" alt="" />
          </div>
          <div className="font-semibold  text-lg text-white  lg:flex justify-between items-center">
            <Link className="px-4 hover:border-b-2  border-blue-400" href="/">
              Home
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400" href="/eventHandling">
              EventHandling
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400" href="/counterExample">
              Counter
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400" href="/todo">
              Todo
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400" href="/signUp">
              SignUp
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400 " href="/login">
              Login
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400 " href="/contact">
              ContactUs
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400 " href="/productListing">
              Product
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400 " href="/addProduct">
              AddProduct
            </Link>
            <Link className="px-4 hover:border-b-2  border-blue-400 " href="/manageUser">
              ManageUser
            </Link>
          </div>
          <div className=" flex  justify-center items-center ">
            <div className="hidden lg:flex justify-center items-center mr-5">
              <input
                className="max-w-md p-1 pl-2 mr-0 border-2  border-blue-600 rounded-lg "
                type="text"
                placeholder=" Search Anything "
              />
              <button className="border-2 p-1  rounded-e-lg border-blue-600 bg-orange-400">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
            </div>
            <div className="lg:hidden mr-10">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
            <div className="lg:hidden mr-10">
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </nav>
        {/* Nav Done */}
      </>
    </div>
  );
};

export default Navbar;
