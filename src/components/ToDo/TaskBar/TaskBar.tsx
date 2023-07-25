import { useState } from "react";
import {ReactComponent as MySvg}  from "../../../../public/AddCircle.svg";

interface Props {
  newTask: (task: boolean) => void;
}

export default function TaskBar({ newTask }: Props) {

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="bg-slate-600 w-[18rem] h-[45rem] mt-[6rem] ml-4 flex rounded-md">
      <button
        onClick={() => newTask(true)}
        className=" mx-auto h-[3rem] mt-3 px-4 cursor-pointer select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white  transition duration-150 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      >
          <MySvg fill={isClicked ? "white" : isHovered ? "black" : "white"} height={30} />
        Add task
      </button>
      <style>
        {`
          .group:hover .fill-current {
            fill: black;
          }
        `}
      </style>
    </section>
  );
}
