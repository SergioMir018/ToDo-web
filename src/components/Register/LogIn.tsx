import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <section className="mt-32  text-white flex flex-col items-center">
      <h1 className="font-belanosima-semibold text-5xl">Log In</h1>
      <input type="text" className="register-inputs" placeholder="name..." />
      <input
        type="password"
        className="register-inputs"
        placeholder="password"
      />
      <Link
        to="/ToDo-web/sing-in"
        className="mt-4 py-1 px-3 cursor-pointer select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white transition duration-150"
      >
        Confirm
      </Link>
    </section>
  );
}
