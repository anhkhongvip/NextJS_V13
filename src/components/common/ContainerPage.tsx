import React from 'react'
type Props = {
    title: string;
    children: React.ReactNode;
}
const ContainerPage = ({ title, children }: Props) => {
  return (
    <div className="px-[2.1875rem] py-[2.5rem]">
        <div className="title font-bold mb-[2.1875rem] text-[1.5625rem]">{title}</div>
        {children}
    </div>
  )
}

export default ContainerPage