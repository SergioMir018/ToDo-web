import React from 'react'

type Props = {
  closeTask: (value: boolean) => void,
  setCardInfo: string[],
}

export default function ToDoTask({ closeTask, setCardInfo }: Props) {
  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[47rem] rounded-xl w-[40rem] border">
      <h1 className=''>
        {setCardInfo[0]}
      </h1>
      <p>{setCardInfo[1]}</p>
    </section>
  );
}
