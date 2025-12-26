import { Link } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Habit Mood Tracker
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Build habits. Track emotions. Grow daily.
        </p>

        <div className="mt-8">
          <SignIn />
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}