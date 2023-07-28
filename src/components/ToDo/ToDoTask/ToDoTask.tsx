import React from 'react'

type Props = {
  closeTask: (value: boolean) => void
}

export default function ToDoTask({ closeTask }: Props) {
  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[47rem] rounded-xl w-[40rem] border">
      Here goes the selected task
    </section>
  );
}
