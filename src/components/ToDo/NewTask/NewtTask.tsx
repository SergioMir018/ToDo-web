import { useState } from "react";

export default function NewTask() {

  const [description, setDescription] = useState('');

  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setDescription(event.target.value);
  }

  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[47rem] rounded-xl w-[50rem] border">
      <h1 className="mt-[2rem] font-belanosima-semibold  inline-block ml-[43%] text-4xl">
        New Task
      </h1>
      <form
        action=""
        className="flex flex-col gap-2 ml-[2rem] mt-4 font-belanosima"
      >
        <ul>
          <li className="flex items-center">
            <label className="mr-2 text-2xl">Title:</label>
            <input type="text" className="task-inputs" />
          </li>
          <li className="mt-10 ml-14">
            <textarea 
            className="task-inputs w-[39rem] resize-none overflow-hidden"
            rows={1}
            value={description}
            onChange={handleChange}
            placeholder="Description..." />
          </li>
        </ul>
      </form>
    </section>
  );
}
