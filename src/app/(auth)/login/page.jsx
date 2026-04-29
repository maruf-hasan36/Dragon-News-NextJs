"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Dragon || Login",
//   description: "Best web Portal in Bangladesh",
// };

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = (data) => {
    console.log(data);
  };

  return (
    <div className="w-2xl mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 space-y-3 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-5">
          {" "}
          Login Your Account
        </h2>
        <hr className="text-slate-200" />
        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type Your Email here"
              {...register("email", { required: "Email field is Required" })}
            />
            {errors.email && (
              <p className="text-red-700">{errors.password.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Type Your Password here"
              {...register("password", {
                required: "password Field is requird",
              })}
            />
            {errors.password && (
              <p className="text-red-700">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">LogIn</button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link
            className="text-red-800 font-semibold border-b-2 border-amber-900"
            href={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
