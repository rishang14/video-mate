import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

type inputtypes = {
  username: string;
  email: string;
  password: string;
  avatar: File | null;
  coverimg?: File | null;
};

const initialvalues = {
  username: "",
  email: "",
  password: "",
  avatar: null,
  coverimg: null,
};

const SignUp = () => {
  const [formvalues, setformValues] = useState<inputtypes>(initialvalues);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "avatar" || name === "coverimg") {
      setformValues((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setformValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
   

 const handleSignUpSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
 }

  return (
    <>
      <div className="mx-auto max-w-screen-xl flex items-center justify-center   px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-secondarybg p-8 rounded-xl shadow-slate-200 shadow-md flex max-w-screen-sm flex-col">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="md:text-2xl font-bold text-3xl font-primary">
              Get Started!
            </h1>
          </div>

          <form onSubmit={handleSignUpSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                UserName
              </label>

              <div className="relative">
                <Input
                  type="text"
                  name="username"
                  value={formvalues.username}
                  onChange={handlechange}
                  className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter UserName"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  value={formvalues.email}
                  onChange={handlechange}
                  className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <Input
                  type="password"
                  name="password"
                  value={formvalues.password}
                  onChange={handlechange}
                  className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <div>
              <div className="">
                <Label htmlFor="picture" className="">
                  Avatar
                </Label>
                <Input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  placeholder="Avatar"
                  onChange={handlechange}
                />
              </div>
            </div>
            <div>
              <div className="">
                <Label htmlFor="picture">CoverImage</Label>
                <Input
                  type="file"
                  placeholder="Cover Img"
                  accept="image/*"
                  onChange={handlechange}
                  name="coverimg"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link to={"/login"}>
                <Button className="text-sm text-paraText" variant={"link"}>
                  I have an account.
                </Button>
              </Link>
              <Button
                type="submit"
                variant={"secondary"}
                className="text-paraText"
                // className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign-Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
