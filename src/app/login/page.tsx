"use client";
import React from "react";
import Image from "next/image";
import Login from '../../assets/login.svg'
import { Merienda } from "next/font/google";
import LoginForm from "@/components/LoginForm";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const merienda = Merienda({subsets: ['latin']})

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#eee2f7] to-[#c9abe0] p-12 px-16 h-screen ">
    <div className="max-w-7xl bg-secondary mx-auto  flex  md:flex-row flex-col justify-center border-2 border-yellow-600 items-center h-[90vh] rounded-lg">
      <div className="w-1/2 bg-[#3E0867] h-full rounded-tl-lg rounded-bl-lg">
        <Image src={Login} alt="logo" width={500} height={300}  className=" rounded-tl-lg rounded-bl-lg object-cover" />
      </div>
      <div className="w-[60%] px-8 py-6 flex flex-col justify-start h-full">
        {/* <div className={merienda.className}> */}
          <h1 className="text-5xl text-secondary-foreground uppercase font-bold">Login</h1>
        {/* </div> */}
        <p className="text-base mb-5 text-muted-foreground">Welcome to 2V School ERP.</p>
        <p className="text-[.65rem] mb-2  text-muted-foreground">Note*: Please Select your role first to login in 2V School ERP.</p>
        <div className="flex">
          <div className="bg-background px-6 py-2 shadow-sm rounded-t-md font-semibold text-primary">
            <IoCheckmarkDoneSharp className="inline-block mr-2"/>
            Admin</div>
          <div className="px-6 py-2 ">Management</div>
          <div className="px-6 py-2 ">User</div>
        </div>
        <LoginForm/>
        </div>
    </div>
    </div>
  )
}

export default page
