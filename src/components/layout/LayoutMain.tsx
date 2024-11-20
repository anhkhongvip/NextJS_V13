import React from 'react';
import TopBar from './TopBar';
import { Manrope } from 'next/font/google';
import Head from 'next/head';

type Props =  {
    children: React.ReactNode;
}

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500']
})

const LayoutMain = ({ children }: Props) => {
  return (
    <>
     <Head>
      <title>Yariga</title>
    </Head>
    <div className={manrope.className}>
      <TopBar/>
      {children}
    </div>
    </>
  )
}

export default LayoutMain;