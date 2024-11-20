import Image from 'next/image';
import React from 'react'
import SearchIcon from '../icon/SearchIcon';

const TopBar = () => {
    return (
        <div className='top-bar__wrapper grid grid-cols-5 p-[0.9375rem_1.125rem] gap-[10px] items-center'>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-5 col-end-1 items-center">
                {/* mobile */}
                <div className="menu-bar menu-bar__icon sm:hidden">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14H18V11.7895H0V14ZM0 8.10526H18V5.89474H0V8.10526ZM0 0V2.21053H18V0H0Z" fill="#11142D" />
                    </svg>

                </div>
                <SearchIcon className="sm:hidden"/>
                {/* mobile */}

                <div className="logo-wrapper hidden sm:flex gap-3 items-center">
                    <Image className="logo-thumbnail" width='35' height='39' src="/Logo.png" alt="logo-image"/>
                    <span className="logo-title font-bold text-[1.5625rem]/4">Yariga</span>
                </div>
            </div>
            <div className="search-wrapper col-start-2 w-[25.3125rem] hidden sm:flex">
                <SearchIcon/>
            </div>
            <div className="grid grid-cols-2 col-start-[-1] items-center">
                <div className="notification__wrapper">
                    <div className="notification__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16L4.87851 16C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067L18 13.1716Z" fill="#808191" />
                            <circle cx="18.5" cy="5.5" r="3.5" fill="#EB5757" />
                        </svg>

                    </div>
                </div>
                <div className="profile w-10 h-10">
                    <Image src='/Profile_image.png' width={40} height={40} className="profile_image" alt="Profile image"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar;