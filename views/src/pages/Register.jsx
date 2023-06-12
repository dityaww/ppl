import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Signup from "../assets/sign-up.svg";

const Register = () => {
  let navigate = useNavigate();

  const [datas, setDatas] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");

    console.log(datas);
  };

  return (
    <>
      <section className="h-[100vh]">
        <div className="bg-pattern h-[100vh] bg-repeat flex justify-center">
          {/* VERSI DESKTOP */}
          <div className="bg-white w-5/6 h-full hidden md:flex shadow-lg">
            <div className="h-full w-[30%]">
              <img src={Signup} className="w-full h-full" alt="" />
            </div>
            <div className="h-full w-[70%] flex items-center justify-center bg-neutral-100">
              <div className="">
                <div className="top-content flex flex-col gap-3 mb-8">
                  <h1 className="text-4xl font-bold text-neutral-600">
                    Create your account.
                  </h1>
                  <p className="text-sm text-neutral-400 font-semibold">
                    Enter the fields below to get started
                  </p>
                </div>

                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col mb-2 gap-1">
                    <label
                      htmlFor="fullname"
                      className="text-neutral-700 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={datas.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-2 gap-1">
                    <label
                      htmlFor="phoneNumber"
                      className="text-neutral-700 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={datas.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col mb-2 gap-1">
                      <label
                        htmlFor="email"
                        className="text-neutral-700 font-medium"
                      >
                        Email
                      </label>
                      <input
                        className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                        type="email"
                        name="email"
                        id="email"
                        value={datas.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="flex flex-col mb-2 gap-1">
                      <label
                        htmlFor="password"
                        className="text-neutral-700 font-medium"
                      >
                        Password
                      </label>
                      <input
                        className="border border-neutral-300 rounded-md py-0.5 outline-neutral-400 px-2 text-neutral-800"
                        type="password"
                        name="password"
                        id="password"
                        value={datas.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mb-8">
                    <input type="checkbox" name="" id="" />
                    <p className="text-sm">Remember me</p>
                  </div>

                  <input
                    type="submit"
                    className="bg-yellow-700 text-white border-none outline-none cursor-pointer w-full py-1.5 rounded-md hover:bg-yellow-800 hover:ring-2 hover:ring-yellow-700 hover:duration-700"
                    value="Sign In"
                  />
                </form>

                <div className="flex gap-1 justify-center text-sm mt-2">
                  <p className="text-neutral-600">You have account?</p>
                  <Link to="/login">
                    <span className="text-blue-500 font-semibold">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
