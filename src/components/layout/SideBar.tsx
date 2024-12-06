import React, { useState } from 'react'
import DashboardIcon from '../icons/DashboardICon';
import Link from 'next/link';
import { sidebarLinks } from "@/constants/general.const";
import { useRouter } from 'next/router';
interface ISidebarLinkProps {
  link: string;
  isActive: boolean;
  title: string;
  icon: React.ReactElement;
}
const SideBar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className='sidebar-wrapper w-[15.625rem] p-[0.9375rem_1.125rem]'>
      {sidebarLinks.map((item) => (<SidebarLink title={item.title} icon={pathname === item.path ? item.iconActive : item.icon} link={item.path} isActive={pathname === item.path} key={item.title} />))}

    </div>
  )
}

export default SideBar;

function SidebarLink({ link, isActive, title, icon }: ISidebarLinkProps) {
  return (
    <Link href={link} className={`flex items-center gap-x-[0.625rem] text-base font-bold py-4 px-[1.4375rem] rounded-xl ease-in duration-100 ${isActive ? 'text-white-color bg-primary-color fill-white-color' : 'fill-[#808191] text-[#808191]'} hover:text-white-color hover:bg-primary-color hover:fill-white-color`}>
      {icon}
      {title}
    </Link>)
}