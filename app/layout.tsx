import type { Metadata } from 'next'
import '@styles/globals.css'

import localFont from 'next/font/local';

const poppins = localFont({

  src: [
    {
      path: '../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kirubel Kinfe',
  description: "I'm an enthusiastic and committed Full Stack Web Developer based in Ethiopia. I have the knowledge and abilities to create fantastic and eye-catching websites. I'm Detail-orientated Web developer skilled in picking up new procedures, tools, and technology rapidly. I design and code beautifully simple web applications that deliver seamless user experiences and drive business success. ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html >
  )
}
