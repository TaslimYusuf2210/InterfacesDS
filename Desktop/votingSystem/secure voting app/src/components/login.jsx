import { useState } from "react";
import AdminLogin from "./adminLogin";
import StudentLogin from "./studentLogin";

function Login() {

  const [toggleLogin, setToggleLogin] = useState(false);
  function toggleLoginPage() {
    setToggleLogin((prev) => !prev);
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border-2 p-4 rounded-xl w-1/4">
        {toggleLogin ? (
          <div>
            <AdminLogin></AdminLogin>
          </div>
        ) : (
          <div>
            <StudentLogin/>
          </div>
        )}
        <div className="text-right">
          <button
            onClick={toggleLoginPage}
            className="text-blue-400 cursor-pointer"
          >
            <i>{toggleLogin ? "Login as a User" : "Login as an Admin"}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
