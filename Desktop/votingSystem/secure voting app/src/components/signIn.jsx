import { useState } from "react";

function SignIn() {

    const [toggleSignIn, setToggleSignIn] = useState(false)
    function toggleSignInPage() {
        setToggleSignIn(prev => !prev)
    }
    return ( 
        <div className="flex justify-center items-center h-screen ">
            <div className="border-2 p-4 rounded-xl w-2/4">
                <div className="text-right">
                    <p><i className="text-blue-400">Sign In</i> as a student</p>
                </div>
                <div className="text-left">
                    <header className="font-bold text-2xl mb-2">Create an Admin Account</header>
                </div>
                <form className="flex flex-col gap-3" action="">
                    <div className="flex gap-1.5 w-full">
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">First name:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">Other names:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                    </div>
                    <div className="flex gap-1.5 w-full">
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">Staff Number:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">User name:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                    </div>
                    <div className="flex gap-1.5 w-full">
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">Password:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                        <div className="flex flex-col text-left w-full">
                            <label className="font-semibold">Confirm Password:</label>
                            <input className="border p-2 rounded" type="text" />
                        </div>
                    </div>
                    <div>
                        <button className="font-semibold w-full bg-purple-400 p-2 text-white rounded">Sign In</button>
                    </div>
                </form>
                <div className="text-right mt-2">
                    <p>Already have an account? <i className="text-blue-400">Login</i></p>
                </div>
            </div>
        </div>

     );
}

export default SignIn;