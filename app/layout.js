//Css
import './globals.css'

//Font
import { Montserrat } from 'next/font/google'

//Components
import Navbar from './components/Navbar/Navbar.jsx'

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
        <div className='max-w-[1536px] min-h-screen flex flex-col m-auto relative overflow-clip'>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}