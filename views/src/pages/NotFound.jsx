import { Link } from "react-router-dom";
import Errors from "../assets/error.gif";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <img src={Errors} alt="" />
        <div className="absolute mt-64">
          <div className="">
            <h3 className="text-neutral-700 text-center font-bold mb-3 italic">
              Page Not Found!
            </h3>
            <Link to="/">
              <div className="flex gap-3 font-semibold bg-blue-400 px-4 py-2 rounded-md text-neutral-100 shadow-lg shadow-blue-300 hover:bg-blue-500 hover:duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                  />
                </svg>
                <p>Back to home</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
