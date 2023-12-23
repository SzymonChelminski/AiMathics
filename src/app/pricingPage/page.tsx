import pricing_page from '../styles/pricing_page.module.css'

export default function Page() {
  return (
    <main className={pricing_page.container}>
        <section className={pricing_page.TilesContainer}>
            <div className={pricing_page.tile}>
                <span className={pricing_page.creditsCount}>
                    <h5>1</h5>
                    Credits
                </span>
                <button>0.1$</button>
            </div>
            <div className={pricing_page.tile}>
                <span className={pricing_page.creditsCount}>
                    <h5>10</h5>
                    Credits
                </span>
                <button>0.99$</button>
            </div>
            <div className={pricing_page.tile}>
                <span className={pricing_page.creditsCount}>
                    <h5>100</h5>
                    Credits
                </span>
                <button>4.99$</button>
            </div>
            <div className={pricing_page.tile}>
                <span className={pricing_page.creditsCount}>
                    <h5>1000</h5>
                    Credits
                </span>
                <button>39.99$</button>
            </div>
        </section>
        <section className={pricing_page.note}>
            <h2>Note</h2>
            <span>
            Each Offer includes the total number of credits it provides, single credit is equal to one solved task.
            </span>
        </section>
    </main>
  )
}
