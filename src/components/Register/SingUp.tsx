import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <section className="text-white flex items-center flex-col mt-32">
      <h1 className="text-5xl font-belanosima-semibold">Sing Up</h1>
      <input type="text" 
      className="register-inputs" 
      placeholder="name..." />
      <input 
      type="email" 
      className="register-inputs" 
      placeholder="email..." />
      <input
        type="password"
        className="register-inputs"
        placeholder="password..." />
      <input
        type="password"
        className="register-inputs"
        placeholder="confirm password..." />
      <div className="mt-4 py-1 px-3 cursor-pointer select-none rounded-lg border-2 group active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 transition duration-150">
        <Link
          to="/ToDo-web/sing-in"
          className="text-white font-belanosima-semibold group-hover:text-black transition duration-150 group-active:text-white" >
          Confirm
        </Link>
      </div>
    </section>
  );
}
