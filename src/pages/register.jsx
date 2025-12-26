import { Link } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Start tracking habits & mood
        </p>

        <div className="mt-8">
          <SignUp />
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}