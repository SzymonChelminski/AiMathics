'use client'

import { useEffect } from 'react'

import error_page from './styles/error_page.module.css'

import Image from 'next/image'

export default function Error({error, reset}: {
    
    error: Error & { digest?: string }
    reset: () => void
    }) {
    useEffect(() => {
        console.error(error)
      }, [error])

    return (
      <div className={error_page.containerAll}>
          <header className={error_page.header}>
              <h1><span>Oops</span>,<br/> something<br/> went <span>wrong</span>...</h1>
          </header>
          <main className={error_page.main}>
              <section>
                  <Image
                      src='/error_page.jpg'
                      height={325}
                      width={325}
                      alt='broken computer'
                      priority={true}
                  />
              </section>
          </main>
          <section className={error_page.containerButtons}>
            <button className={error_page.buttonTryAgain} onClick={()=>reset()}>Try again</button>
            <button className={error_page.buttonGoHome}>Go home</button>
          </section>
      </div>
    )
  }