import Image from 'next/image'

//CSS
import home_page from './styles/home_page.module.css'

export default async function Home() {
  return (
    <div className={home_page.containerAll}>
      <header>
        <h1 className={home_page.brandName}>
          <span className={home_page.blueDistinction}>Ai</span>Mathics
        </h1>
        <h3 className={home_page.slogan}>
          We spread knowledge< br/>through <span className={home_page.blueDistinction}>solutions</span>
        </h3>
      </header>
      <main className={home_page.containerMain}>
        <Image
            height={350}
            width={350}
            src="/home_page.jpg"
            alt='three people standing in front of a computer screen'
            priority={true}
            className={home_page.image}
          />
        <span>
          <button className={home_page.button}>Get Started</button>
          <p className={home_page.bottomText}>Do you have an account? <span className={home_page.blueDistinction}>Signup</span></p>
        </span>
      </main>
    </div>
  )
}
