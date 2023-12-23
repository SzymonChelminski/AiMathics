import loading_page from './styles/loading_page.module.css'

export default function Loading() {
    return (
        <main className={loading_page.container}>
            <div className={loading_page.skeletonElHeader}></div>
            <div className={loading_page.lines}>
                <hr className={loading_page.skeletonElLines}></hr>
                <hr className={loading_page.skeletonElLines}></hr>
                <hr className={loading_page.skeletonElLines}></hr>
            </div>
            <div className={loading_page.skeletonElMain}></div>
            <div className={loading_page.skeletonElButton}></div>
        </main>
    )
}