import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="text-white flex items-center flex-col mt-32">
      <h1 className="text-5xl font-belanosima-semibold">Register</h1>
      <input
        type="text"
        className="mt-4 bg-transparent w-[16rem] p-2 border-2 border-dashed border-slate-600 rounded-md outline-none focus:border-white focus:border-solid  transition duration-150"
        placeholder="name..."
      />
      <input
        type="email"
        className="mt-4 bg-transparent w-[16rem] p-2 border-2 border-dashed border-slate-600 rounded-md outline-none focus:border-white focus:border-solid  transition duration-150"
        placeholder="email..."
      />
      <input
        type="password"
        className="mt-4 bg-transparent w-[16rem] p-2 border-2 border-dashed border-slate-600 rounded-md outline-none focus:border-white focus:border-solid  transition duration-150"
        placeholder="password..."
      />
      <input
        type="password"
        className="mt-4 bg-transparent w-[16rem] p-2 border-2 border-dashed border-slate-600 rounded-md outline-none focus:border-white focus:border-solid  transition duration-150"
        placeholder="confirm password..."
      />
      <div className="mt-4 py-1 px-3 cursor-pointer select-none rounded-lg border-2 group active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 transition duration-150">
        <Link
          to="/ToDo-web/sing-in"
          className="text-white font-belanosima-semibold group-hover:text-black transition duration-150 group-active:text-white"
        >
          Confirm
        </Link>
      </div>
    </section>
  );
}
