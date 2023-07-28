import React from 'react'

type Props = {
  closeTask: (value: boolean) => void,
  setCardTitle: string
}

export default function ToDoTask({ closeTask, setCardTitle }: Props) {
  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[47rem] rounded-xl w-[40rem] border">
      <h1>{setCardTitle}</h1>
    </section>
  );
}
