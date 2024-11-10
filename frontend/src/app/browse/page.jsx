"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";

const Browse = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/product/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const displayProduct = () => {
    return product.map((obj) => (
      <div className="container ">
        <Link
          href={"/view/" + obj._id}
          className="group relative block bg-black rounded-xl"
        >
          <img
            alt=""
            src={obj.image}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-8 sm:p-8 lg:p-8">
            <p className="text-xl font-semibold uppercase tracking-widest text-pink-500">
              {obj.name}
            </p>
            <p className="text-lg font-medium text-white sm:text-xl">
              $ {obj.price}
            </p>
            <div className="mt-32 sm:mt-48 lg:mt-32">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-md font-semibold text-white">
                  {obj.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="">
      <header className="bg-body-tertiary">
        <div className="container py-5">
          <p className="display-2 text-center mb-5 text-2xl fw-bold">
            All Products
          </p>

          <input
            type="text"
            placeholder="Search Items"
            className="form-control w-75 mx-auto rounded-lg border border-black text-xl px-4 py-1 ml-8"
          />
        </div>
      </header>
      <div className="container flex  ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
          {" "}
          {displayProduct()}{" "}
        </div>
      </div>
    </div>
  );
};

export default Browse;
