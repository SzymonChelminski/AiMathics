//Css
import './globals.css'

//Font
import { Montserrat } from 'next/font/google'

//Authentication
import AuthContext from '@/app/components/AuthContext/AuthContext.jsx'

//Components
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata= {
  title: 'AiMathics',
  description: 'Math with passion',
}

export default function Layout({ children }) {
  return (
    <html>
      <body className={montserrat.className}>
        <AuthContext>
          <div className='max-w-[1536px] justify-between min-h-screen flex flex-col m-auto relative overflow-clip'>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  )
}