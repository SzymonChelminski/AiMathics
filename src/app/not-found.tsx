import React from 'react'

import not_found from './styles/not_found.module.css'

import Image from 'next/image'

export default function notFound() {
  return (
    <div className={not_found.containerAll}>
        <header className={not_found.header}>
            <h1>Error 404</h1>
            <span></span>
            <h2>Page<br/> not found</h2>
        </header>
        <main className={not_found.main}>
            <section>
                <Image
                    src='/404notFound.png'
                    height={325}
                    width={325}
                    alt='floating astronout'
                    priority={true}
                />
            </section>
        </main>
        <button className={not_found.button}>Go back home</button>
    </div>
  )
}