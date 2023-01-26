import {Inter} from '@next/font/google';

import '@/styles/reset.css'
import '@/styles/global.css'

const interFontFamily = Inter({subsets: ['latin']})

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <head />
      <body className="container">
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
