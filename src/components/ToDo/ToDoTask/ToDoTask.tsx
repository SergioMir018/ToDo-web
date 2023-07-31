import { ReactComponent as Close } from '../../../../public/Close.svg'

type Props = {
  closeTask: (value: boolean) => void,
  setCardInfo: string[],
}

export default function ToDoTask({ closeTask, setCardInfo }: Props) {
  return (
    <section className="mt-[5rem] ml-[4rem] h-[45.5rem] rounded-xl w-[40rem] border">
      <div className="z-10 flex justify-end">
        <button onClick={() => closeTask(false)}>
          <Close fill="white" />
        </button>
      </div>
      <h1 className="-mt-[1rem] font-belanosima-semibold flex justify-center text-4xl">
        {setCardInfo[0]}
      </h1>
      <h2 className="ml-[2rem] mt-[2rem] font-belanosima text-3xl">
        Task description:
      </h2>
      {/* <p>{setCardInfo[1]}</p> */}
      <p className="mx-[3rem] text-justify mt-2 font-belanosima text-lg">
        {(setCardInfo[1] === "") ? "No description" : setCardInfo[1]}
      </p>
    </section>
  );
}
