"use client";
import React from "react";

const ManageUser = () => {
  return (
    <div className="lg:max-w-[80%] mx-auto py-10">
      <div className="border rounded-xl shadow-lg p-8 ">
        <h1 className="text-center font-bold text-3xl">Manage User</h1>
        {/* <hr/> */}

        <table className="w-full mt-4 mb-2">
            <thead className="bg-violet-400 text-white">
                <tr>
                    <th className="p-2 border border-white">ID</th>
                    <th className="p-2 border border-white">NAME</th>
                    <th className="p-2 border border-white">EMAIL</th>
                    <th className="p-2 border border-white">PASSWORD</th>
                    <th colSpan={2}>ACTIONS</th>
                </tr>
            </thead>

        </table>
      </div>
    </div>
  );
};

export default ManageUser;
