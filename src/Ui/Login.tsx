import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Login = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl   px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="md:text-2xl font-bold text-3xl text-paraText-dark">Welcome back!</h1>

          <p className="mt-4 text-paraText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <Input
                type="email"
                className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <Input
                type="password"
                className="w-full rounded-lg text-black border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button className="text-sm text-paraText" variant={"link"}>Sign-Up</Button>
            <Button className="text-sm text-paraText" variant={"link"}>
              Forget password
            </Button>

            <Button
              type="submit"
              variant={"secondary"} 
              className="text-paraText"
              // className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign-In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
